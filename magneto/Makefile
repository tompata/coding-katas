test:
	@mocha \
		--reporter spec \
		--ui tdd

cov:
	@mocha \
		--reporter spec \
		--ui tdd \
		--require blanket \
		-R html-cov > coverage.html

test-w:
	@mocha \
		--reporter spec \
		--ui tdd \
		--watch

.PHONY: test test-w