from moviepy.editor import VideoFileClip

# Nome do arquivo de entrada e saída
input_path = "background.mp4"
output_path = "background_cortado.mp4"

# Carrega o vídeo
clip = VideoFileClip(input_path)

# Define a região a ser mantida (x1, y1, x2, y2)
# Mantemos do topo (0) até altura - 300
cortado = clip.crop(x1=0, y1=0, x2=clip.w, y2=clip.h - 300)

# Salva o vídeo cortado
cortado.write_videofile(output_path, codec="libx264", audio_codec="aac")

