.PHONY: dist clean

webpack = ./node_modules/webpack/bin/webpack.js
babel = ./node_modules/babel-cli/bin/babel.js
uglifyjs = node ./node_modules/uglifyjs/bin/uglifyjs

define PREAMBLE
/**
 * Resizes images to create filled rows, preserving aspect ratios.
 *
 * The MIT License. Copyright © 2016 Ryan Harter.
 */
endef

export PREAMBLE

OPTS = --screw-ie8 --preamble="$$PREAMBLE"

dist: clean
	mkdir dist

	# make single script file
	$(webpack) script/init.js dist/imagerow.js

	# transpile down to ES5, wrap in IIFE
	$(babel) dist/imagerow.js --presets=es2015-script --plugins=iife-wrap --out-file=dist/imagerow.js

	# dist
	$(uglifyjs) dist/imagerow.js $(OPTS) --beautify -o dist/imagerow.js
	$(uglifyjs) dist/imagerow.js $(OPTS) --compress --mangle -o dist/imagerow.min.js

clean:
	rm -rf dist