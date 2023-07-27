MAINDOC = curricolo_sa
LTXARGS = -pdf -lualatex -use-make

.PHONY: $(MAINDOC).pdf all clean

all: $(MAINDOC).pdf

$(MAINDOC).pdf: $(MAINDOC).tex
	latexmk $(LTXARGS) $(MAINDOC).tex

clean:
	latexmk -C
