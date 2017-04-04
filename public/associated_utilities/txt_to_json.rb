require 'json'

input_file = Dir[[ENV['PWD'],"OUTPUT_*.txt"].join('/')]
output_file = ['OUTPUT_',Time.now.strftime('%Y-%m-%d'),'.json'].join('')

p input_file
output_hash = Hash.new
# raw_text = Array.new
raw_lines = IO.readlines(input_file[0])
raw_lines.each do |line|
  output_hash[line[0..3]] = line[4..-1].chomp
end
system "touch #{output_file}"
# p output_hash.to_json
IO.write(output_file, output_hash.to_json)
system "open #{output_file}"




