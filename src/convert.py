#!/usr/bin/python
# Document : convert.py
# Description : Converts SVG files to .js files.
# Date : 2019-12-23
# Copyright (c) Prashant Shrestha, https://prashant.me

import glob
import os

def generateFile(filepath, content):
    if os.path.exists(filepath) and os.path.isfile(filepath):
        # Already exists, ignore.
        print("Skipping " + filepath + " because it already exists.")
    else:
        # Doesn't exist, create a new file with the content.
        with open(filepath, 'w') as f:
            f.write(content)
        print("Wrote to " + filepath)

def readAndParseContent(svgfilepath):
    contentProps = "width={size} height={size} fill={color} stroke=\"auto\" strokeWidth=\"auto\" {...mProps}"
    contentPads = "import React from 'react';\n" + "import PropTypes from 'prop-types';\n\n" + "const --NAME-- = (props) => {\n\t" + "const { color, size, ...mProps } = props;\n\t" + "return (\n\t" + "--SVG--\n" + ");\n" + "\t};\n\n" + "--NAME--.propTypes = {\n" + "color: PropTypes.string,\n" + "size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),\n" + "};\n\n\n" + "--NAME--.defaultProps = {\n" + "color: '#000000',\n" + "size: '30',\n" + "};\n\n" + "export default --NAME--;"
    svgfileContent = ""

    if os.path.exists(svgfilepath) and os.path.isfile(svgfilepath):
        with open(svgfilepath, 'r') as f:
            svgfileContent = f.read()
        # Read the content, parse and convert.
        if len(svgfileContent) > 0:
            svgfileContent = svgfileContent.replace('<?xml version="1.0" encoding="utf-8"?>', '').replace("<!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->", "").replace("xmlns:xlink=\"http://www.w3.org/1999/xlink\"", "").replace("xml:space=\"preserve\"", contentProps + " space=\"preserve\"").replace("style=\"enable-background:new 0 0 30 30;\" ", "")
            filename = os.path.basename(svgfilepath).title().replace(".Svg", ".js")
            basetitle = filename.replace('Wi-', '').replace('-', ' ')

            NAME = basetitle.replace(' ', '')[:-3]
            print("Will be created as " + basetitle.replace(' ', ''))
            with open('exports', 'a+') as f:
                f.write("export { default as " + NAME + " } from \"./icons/" + NAME + "\"\n")
            with open('usage', 'a+') as f:
                f.write('<div className="icon-wrapper"><Icon.' + NAME + ' color={color} size={size} /><span className="icon-name">' + NAME + '</span></div>\n')
            generateFile('icons/' + NAME + ".js", contentPads.replace("--NAME--", basetitle.replace(' ', '')[:-3]).replace("--SVG--", svgfileContent))

files = glob.glob('_icons/*.svg')

for file in files:
    readAndParseContent(file)