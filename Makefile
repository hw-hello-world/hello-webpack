WP=node_modules/.bin/webpack
WPS=node_modules/.bin/webpack-dev-server

default: dev

clean:
	rm -rf build

index: clean
	mkdir -p build/
	cp app/index.html build/index.html

b: index
	$(WP)

p: index
	$(WP) -p

d: index
	$(WPS) --devtool eval --progress --colors --hot --content-base build
