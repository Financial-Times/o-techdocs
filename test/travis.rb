#!/usr/bin/env ruby

# Install build tools
`npm install`

# Install dependencies
`bower install`

# Create build output directory
Dir.mkdir('buildcache')

# Perform the build
result = `grunt`

# Check the exit code was 0 (i.e. no errors)
raise result unless $?.to_i == 0

# Check the output of the build
raise "When compiled the module should output some CSS" unless File.exists?('buildcache/bundle.css');
raise "When compiled the module should output some JavaScript" unless File.exists?('buildcache/bundle.js');

puts "Build complete"
