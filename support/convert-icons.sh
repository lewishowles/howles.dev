#!/bin/bash

#
# Convert icons
#
# Convert one or more SVG icon files from a given folder into Vue components,
# removing the bulk of the setup work. When run, the script will ask for the
# path to the folder containing the SVG icons. This folder must be accessible to
# the script.
#
# Each icon in that directory will be created as a new component in
# /src/components/icons, named `icon-${base_filename}.vue`.
#
# Example:
#	 ./support/convert-icons.sh
#
# Recommended alias:
#	 convert:icons
#

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/colours.sh"

# Determine where to retrieve the original icons.
echo "";
echo -e "Enter the path to the directory containing the SVG files\n";
read -p "Directory: " SVG_DIR

# Where to create our components.
OUTPUT_DIR="src/components/icon"

# Ensure that our output directory exists.
mkdir -p "$OUTPUT_DIR"

for svg_file in "$SVG_DIR"/*.svg; do
	# Extract the filename without extension, which we use as the basis for the
	# component's filename.
	filename=$(basename -- "$svg_file")
	component_name="icon-${filename%.*}"

	svg_content=$(cat "$svg_file")

	# Determine the appropriate viewBox, which is either provided, or generated
	# from width and height attributes.
	viewBox=$(echo "$svg_content" | grep -oE 'viewBox="[^"]+"')

	if [ -z "$viewBox" ]; then
		width=$(echo "$svg_content" | awk -F 'width="' '{print $2}' | awk -F '"' '{print $1}')
		height=$(echo "$svg_content" | awk -F 'height="' '{print $2}' | awk -F '"' '{print $1}')

		if [ -n "$width" ] && [ -n "$height" ]; then
			viewBox="0 0 $width $height"
		else
			viewBox="0 0 18 18"
		fi
	else
		viewBox=$(echo "$viewBox" | grep -oE '[0-9]+ [0-9]+ [0-9]+ [0-9]+')
	fi

	# Remove the <svg> tags from the SVG content
	svg_content=$(echo "$svg_content" | sed -E 's/<\/?svg[^>]*>//g')

	if [ "$viewBox" == "0 0 18 18" ]; then
		vue_content="<template>\n\t<base-icon>\n\t\t${svg_content}\n\t</base-icon>\n</template>"
	else
		vue_content="<template>\n\t<base-icon viewBox=\"${viewBox}\">\n\t\t${svg_content}\n\t</base-icon>\n</template>"
	fi

	# Write the Vue component to the output directory
	echo -e "$vue_content" > "$OUTPUT_DIR/$component_name.vue"

	echo -e "↳ Created ${PURPLE}$component_name${RESET_COLOUR}.vue"
done
