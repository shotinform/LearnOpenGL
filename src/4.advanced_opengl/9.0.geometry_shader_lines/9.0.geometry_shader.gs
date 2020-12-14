#version 330 core
layout (points) in;
layout (line_strip, max_vertices = 2) out;

in VS_OUT {
    vec3 color;
} gs_in[];

out vec3 fColor;

void draw_line(vec4 position)
{
    fColor = gs_in[0].color;
    gl_Position = position + vec4(-0.2, 0.0, 0.0, 0.0);
    EmitVertex();

    gl_Position = position + vec4(0.2, 0.0, 0.0, 0.0);
    EmitVertex();
    EndPrimitive();
}

void main() {    
    draw_line(gl_in[0].gl_Position);
}