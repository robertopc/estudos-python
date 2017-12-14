# Strings

O tipo string é uma lista de caracteres e é um objeto imutável.

```python
>>> str1 = 'o rato roeu a roupa do rei de roma'
>>> str2 = 'robertopc'
>>> str3 = 'gato'
>>> str3[0] = 'p' # tento mudar o valor do 1º índice e dá erro(porque é imutável)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
>>> str3 = 'coelho' # mudar a string inteira é permitido
>>> str3
'coelho'
```

### Índices
Podemos acessar os caracteres da string via índice.

```python
>>> str1[0] # 1º caracter(o índice inicia no 0)
'o'
>>> str2[7] # 8º caracter, o índice é 8-1
'p'
>>> str2[-2] # -2 índices(retorna para o fim)
'p'
```

### Slice(corte)
Também podemos acessar pedaços da string através do operador de **slice**(corte). A notação é ```string[inicio:fim]```. Exemplos:

```python
>>> str1[0:4] # 1ª até o 4º índice
'o ra'
>>> str2[5:8] # 6º até 8º índice
'top'
>>> str1[2:] # 3º até o último índice
'rato roeu a roupa do rei de roma'
>>> str2[:4] # 1º até o 4º índice
'robe'
>>> str1[12:-8] # 13º até o tamanho da string -8 índices
'a roupa do rei'
>>> str1[-7:-2] # -7 até -2 índices
'de ro'
```

### Strings Multilinha
Usamos 3 aspas simples ```'''``` ou duplas ```"""```.

```python
str1 = """Esta é uma string multilinha.
Segue uma lista de frutas:
1. banana
2. maça
3. laranja
  3.1. pêra
  3.2. lima
4. uva
"""
```
### Concatenação e Repetição
Para concatenar strings usamos o operador ```+``` e para repetição o ```*```.

```python
>>> str1 = 'abc'
>>> str2 = 'xyz'
>>> str2 + str1
'xyzabc'
>>> str1 * 3
'abcabcabc'
```

Métodos de String
===

Para os retornos abaixo, iremos utilizar a ```str = 'roberto'```.

método | chamada | retorno | descrição |
--- | --- | --- | ---
str.capitalize()   | | Roberto | deixa maiúscula a primeira vogal      |
str.casefold()     |  | roberto | parecida com a lower(), porém é "mais agressiva"      |
str.center(width[, fillchar]) | str.center(13, '.') | '...roberto...' | aumenta a string ao tamanho definido **width** e preenche com o caracter **fillchar** os espaços restantes. Se não for definido o **fillchar**, preenche com espaços.
str.count(sub[, start[,end]]) | str.count('r') | 2 | conta a quantidade de vezes que a **sub** aparece na string
str.encode(encoding='utf-8', errors='strict') | str.encode() | b'roberto' | codigica a string para um charset
str.endswith(suffix[, start[, end]]) | str.endswith('rt') | False | verifica se a string termina com o **suffix**
str.expandtabs | chamada | retorno | desc
str.find | chamada | retorno | desc
str.format | chamada | retorno | desc
str.format_map | chamada | retorno | desc
str.index | chamada | retorno | desc
str.isalnum | chamada | retorno | desc
str.isalpha | chamada | retorno | desc
str.isdecimal | chamada | retorno | desc
str.isdigit | chamada | retorno | desc
str.isidentifier | chamada | retorno | desc
str.islower | chamada | retorno | desc
str.isnumeric | chamada | retorno | desc
str.isprintable | chamada | retorno | desc
str.isspace | chamada | retorno | desc
str.istitle | chamada | retorno | desc
str.isupper | chamada | retorno | desc
str.join | chamada | retorno | desc
str.ljust | chamada | retorno | desc
str.lower | chamada | retorno | desc
str.lstrip | chamada | retorno | desc
str.maketrans | chamada | retorno | desc
str.partition | chamada | retorno | desc
str.replace | chamada | retorno | desc
str.rfind | chamada | retorno | desc
str.rindex | chamada | retorno | desc
str.rjust | chamada | retorno | desc
str.rpartition | chamada | retorno | desc
str.rsplit | chamada | retorno | desc
str.rstrip | chamada | retorno | desc
str.split | chamada | retorno | desc
str.splitlines | chamada | retorno | desc
str.startswith | chamada | retorno | desc
str.strip | chamada | retorno | desc
str.swapcase | chamada | retorno | desc
str.title | chamada | retorno | desc
str.translate | chamada | retorno | desc
str.upper | chamada | retorno | desc
str.zfill | chamada | retorno | desc