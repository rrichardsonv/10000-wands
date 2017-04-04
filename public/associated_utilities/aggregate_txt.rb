TEXT_FILES = Dir[[ENV['PWD'],"*.txt"].join('/')]
output_file = ['OUTPUT_',Time.now.strftime('%Y-%m-%d'),'.txt'].join('')


raw_text = Array.new
i = 0
TEXT_FILES.each do |file_name|
  if file_name[-3..-1] == 'txt'
    raw_text << File.read(file_name).split(/\n(?=\d)/)
  end
end

system "touch #{output_file}"
raw_text.sort!{|a,b| a[0][0..3].to_i <=> b[0][0..3].to_i}

prepped_text = raw_text.map{|page| page.join("\n").gsub(/\n+/, "\n")}.join("|\n").gsub(/\n?S?\n[\|S]/,"\n").gsub(/\n{2,}/,"\n")

IO.write(output_file, prepped_text)
system "open #{output_file}"


