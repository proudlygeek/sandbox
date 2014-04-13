#include <stdio.h>
#include <stdlib.h>

static char input[2048];

int main(int argc, char **argv) {
    puts("Lispy Version 0.0.0.0.1");
    puts("Press ctrl+c to exit...");

    while(1) {
        fputs("lispy> ", stdout);

        // Copy from stdin to input 2048 bytes
        fgets(input, 2048, stdin);
        printf("No you're a %s", input);
    }
}
