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

## Índices
Podemos acessar os caracteres da string via índice.

```python
>>> str1[0] # 1º caracter(o índice inicia no 0)
'o'
>>> str2[7] # 8º caracter, o índice é 8-1
'p'
>>> str2[-2] # -2 índices(retorna para o fim)
'p'
```

## Slice
Também podemos acessar pedaços da string através do operador de **slice**. A notação é ```string[inicio:fim]```.

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

## Strings Multilinha
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
## Concatenação e Repetição
Para concatenar strings usamos o operador ```+``` e para repetição o ```*```.

```python
>>> str1 = 'abc'
>>> str2 = 'xyz'
>>> str2 + str1
'xyzabc'
>>> str1 * 3
'abcabcabc'
```

## String Methods

A string por ser um objeto, possui alguns métodos embutidos. 
Como mostrados a seguir.

- [lower](#lower)
- [upper](#upper)
- [swapcase](#swapcase)
- [capitalize](#capitalize)
- [title](#title)
- [casefold](#casefold)
- [center](#center)
- [count](#count)
- [encode](#encode)
- [endswith](#endswith)
- [startswith](#startswith)
- [expandtabs](#expandtabs)
- [find](#find)
- [rfind](#rfind)
- [rindex](#rindex)
- [format](#format)
- [format_map](#format_map)
- [index](#index)
- [isalnum](#isalnum)
- [isalpha](#isalpha)
- [isdecimal](#isdecimal)
- [isdigit](#isdigit)
- [isidentifier](#isidentifier)
- [islower](#islower)
- [isupper](#isupper)
- [isnumeric](#isnumeric)
- [isprintable](#isprintable)
- [isspace](#isspace)
- [istitle](#istitle)
- [join](#join)
- [ljust](#ljust)
- [rjust](#rjust)
- [rpartition](#rpartition)
- [split](#split)
- [rsplit](#rsplit)
- [strip](#strip)
- [lstrip](#lstrip)
- [rstrip](#rstrip)
- [replace](#replace)
- [zfill](#zfill)
- [splitlines](#splitlines)
- [maketrans](#maketrans)
- [translate](#translate)

### <a name="lower"></a>str.lower() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.lower)
Converte toda string para minúsculo.
```python
>>> 'lorem IPSUM DoLoR'.lower()
'lorem ipsum dolor'
```

### <a name="upper"></a>str.upper() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.upper)
Converte toda string para maiúsculo.
```python
>>> 'lorem IPSUM DoLoR'.upper()
'LOREM IPSUM DOLOR'
```

### <a name="swapcase"></a>str.swapcase() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.swapcase)
Inverte minúsculo para maiúsculo e vice-versa.
```python
>>> 'lorem IPSUM DoLoR'.swapcase()
'LOREM ipsum dOlOr'
```

### <a name="capitalize"></a>str.capitalize() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.capitalize)
Deixa maiúscula primeiro caractere e minúsculos os restantes.
```python
>>> 'lorem IPSUM DoLoR'.capitalize()
'Lorem ipsum dolor'
```

### <a name="title"></a>str.title() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.title)
Deixa maiúscula a primeira letra de cada palavra e minúsculos os restantes.
```python
>>> 'lorem IPSUM DoLoR'.title()
'Lorem Ipsum Dolor'
```

### <a name="casefold"></a>str.casefold() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.casefold)
Parecida com a lower() porém é "mais agressiva".
```python
>>> 'lorem IPSUM DoLoR'.casefold()	
'lorem ipsum dolor'
```

### <a name="center"></a>str.center(width[, fillchar]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.center)
Retorna uma string com o tamanho definido em _width_ e preenche com o caracter _fillchar_ os espaços restantes. Se não for definido o _fillchar_, preenche com espaços.
```python
>>> 'lorem IPSUM DoLoR'.center(21, '.')
'..lorem IPSUM DoLoR..'
>>> 'lorem IPSUM DoLoR'.center(30)
'      lorem IPSUM DoLoR       '
```

### <a name="count"></a>str.count(sub[, start[,end]]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.count)
Conta a quantidade de vezes que _sub_ aparece na str.
```python
>>> 'lorem IPSUM DoLoR'.count('o')
3
>>> 'lorem IPSUM DoLoR'.count('z')
0
```

### <a name="encode"></a>str.encode(encoding='utf-8', errors='strict') [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.encode)
Codifica a string para um charset.
```python
>>> 'lorem IPSUM DoLoR'.encode()	
b'lorem IPSUM DoLoR'
```

### <a name="endswith"></a>str.endswith(suffix[, start[, end]]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.endswith)
Verifica se a string termina com o _suffix_.
```python
>>> 'lorem IPSUM DoLoR'.endswith('rt')
False
>>> 'lorem IPSUM DoLoR'.endswith('oR')
True
```

### <a name="startswith"></a>str.startswith(prefix[, start[, end]]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.startswith)
Verifica se a string começa com o _prefix_.
```python
>>> 'lorem IPSUM DoLoR'.startswith('lo')
True
>>> 'lorem IPSUM DoLoR'.startswith('Lo')
False
```

### <a name="expandtabs"></a>str.expandtabs(tabsize=8) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.expandtabs)
Converte tabs para espaços(padrão 8).
```python
>>> 'lorem IPSUM DoLoR'.expandtabs()
'lorem IPSUM DoLoR'
```

### <a name="find"></a>str.find(sub[, start[, end]]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.find)
Busca _sub_ na string e retorna o índice da primeira encontrada, retorna -1 se não encontrar nada. Atenção: método case sensitive.
```python
>>> 'lorem IPSUM DoLoR'.find('m')	
4
>>> 'lorem IPSUM DoLoR'.find('z')	
-1
```

### <a name="rfind"></a>str.rfind(sub[, start[, end]]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.rfind)
Busca _sub_ na string e retorna o índice da primeira encontrada começando pela direita.<br>
Retorna -1 se não encontrar nada.
```python
>>> 'lorem IPSUM DoLoR'.rfind('o')	
15
>>> 'lorem IPSUM DoLoR'.rfind('o',0,15)
13
```

### <a name="rindex"></a>str.rindex(sub[, start[, end]]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.rindex)
Igual o rfind, só que retorna uma exceção ValueError se não encontrar nada.
```python
>>> 'lorem IPSUM DoLoR'.rindex('o')	
15
>>> 'lorem IPSUM DoLoR'.rindex('o',0,15)
13
```

### <a name="format"></a>str.format(*args, **kwargs) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.format)
Formata a string substituindo os coringas {} pelos _args_.
```python
>>> "A {} de 1 + 2 é {}".format('soma', 1+2)	
'A soma de 1 + 2 é 3'
```

### <a name="format_map"></a>str.format_map(mapping) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.format_map)
Parecido com o str.format(), exceto que mapping é usado diretamente e não copiado de um dict.
```python
>>> class Default(dict):
...     def __missing__(self, key):
...         return key
...
>>> '{name} was born in {country}'.format_map(Default(name='Guido'))
'Guido was born in country'
```

### <a name="index"></a>str.index(sub[, start[, end]]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.index)
Parecido com a str.find(), exceto que se não encontrar dispara uma exceção ValueError
```python
>>> 'lorem IPSUM DoLoR'.index('Do')	
12
>>> 'lorem IPSUM DoLoR'.index('XZ')
Traceback (most recent call last):
  File "<input>", line 1, in <module>
    "abc".index('xyz')
ValueError: substring not found
```

### <a name="isalnum"></a>str.isalnum() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.isalnum)
Retorna True se a string for totalmente alfanumérica.
```python
>>> 'lorem IPSUM DoLoR'.isalnum()
False
>>> "abc102030xyz".isalnum()
True
```

### <a name="isalpha"></a>str.isalpha() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.isalpha)
Retorna True se a string for totalmente alfabética.
```python
>>> 'lorem IPSUM DoLoR'.isalpha()
False
>>> "abcdef".isalpha()
True
```

### <a name="isdecimal"></a>str.isdecimal() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.isdecimal)
Retorna True se a string for totalmente decimal.
```python
>>> 'lorem IPSUM DoLoR'.isdecimal()
False
>>> "125457836".isdecimal()
True
```

### <a name="isdigit"></a>str.isdigit() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.isdigit)
Retorna True se a string for totalmente dígito.
```python
>>> 'lorem IPSUM DoLoR'.isdigit()
False
>>> "125457836".isdigit()
True
```

### <a name="isidentifier"></a>str.isidentifier() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.isidentifier)
Retorna True se a string for um identificador válido.
```python
>>> 'lorem IPSUM DoLoR'.isidentifier()
False
```

### <a name="islower"></a>str.islower() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.islower)
Retorna True se a string for totalmente minúscula.
```python
>>> 'lorem IPSUM DoLoR'.islower()
False
>>> "lorem ipsum dolor".islower()
True
```

### <a name="isupper"></a>str.isupper() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.isupper)
Retorna True se a string for totalmente maiúscula.
```python
>>> 'lorem IPSUM DoLoR'.isupper()
False
>>> "LOREM IPSUM DOLOR".isupper()
True
```

### <a name="isnumeric"></a>str.isnumeric() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.isnumeric)
Retorna True se a string for totalmente numérica.
```python
>>> 'lorem IPSUM DoLoR'.isnumeric()
False
>>> "3.5".isnumeric()
False
>>> "123456".isnumeric()
True
```

### <a name="isprintable"></a>str.isprintable() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.isprintable)
Retorna True se todos os caracteres da string forem imprimíveis ou ela for vazia.
```python
>>> 'lorem IPSUM DoLoR'.isprintable()
True
>>> """linha 1
... linha 2
... linha 3""".isprintable()
False
>>> "".isprintable()
True
```

### <a name="isspace"></a>str.isspace() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.isspace)
Retorna True se todos os caracteres forem espaços.
```python
>>> 'lorem IPSUM DoLoR'.isspace()
False
>>> " ".isspace()
True
>>> """
...
...
...         """.isspace()
True
```

### <a name="istitle"></a>str.istitle() [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.istitle)
Retorna True se a string for um título(palavras iniciadas com maiúsculas e o resto minúsculas).
```python
>>> 'lorem IPSUM DoLoR'.istitle()
False
>>> "Lorem Ipsum D".istitle()
True
```

### <a name="join"></a>str.join(iterable) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.join)
Retorna uma string com os items do _iterable_ concatenados. O str neste caso serve como separador.
```python
>>> ', '.join(['Banana', 'Laranja', 'Uva'])
'Banana, Laranja, Uva'
>>> '~'.join(['a', 'b', 'c', '1', '2', '3', 'x', 'y', 'z'])
'a~b~c~1~2~3~x~y~z'
```

### <a name="ljust"></a>str.ljust(width[, fillchar]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.ljust)
Retorna uma string alinhada a esquerda aumentada para o _width_. Caso seja oferecido o _fillchar_ preenche com ele, senão preenche com espaço.
```python
>>> 'lorem IPSUM DoLoR'.ljust(30)
'lorem IPSUM DoLoR             '
>>> 'lorem IPSUM DoLoR'.ljust(50,'.')
'lorem IPSUM DoLoR.................................'
```

### <a name="rjust"></a>str.rjust(width[, fillchar]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.rjust)
Retorna uma string alinhada a direita aumentada para o _width_. Caso seja oferecido o _fillchar_ preenche com ele, senão preenche com espaço.
```python
>>> 'lorem IPSUM DoLoR'.rjust(30)
'             lorem IPSUM DoLoR'
>>> 'lorem IPSUM DoLoR'.rjust(50,'.')
'.................................lorem IPSUM DoLoR'
```

### <a name="rpartition"></a>str.rpartition(sep) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.rpartition)
Divide a string através do separador, e retorna uma tupla contendo: a parte antes do separador, o separador e a parte depois do separador.
```python
>>> 'lorem IPSUM DoLoR'.rpartition('IPSUM')
('lorem ', 'IPSUM', ' DoLoR')
>>> "Roberto & Sabrina".rpartition(' & ')
('Roberto', ' & ', 'Sabrina')
```

### <a name="split"></a>str.split(sep=None, maxsplit=-1) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.split)
Divide a string através do separador, partindo da esquerda pra direita.
Se o _maxsplit_ for provido, divide até encontra o máximo de separadores.
```python
>>> 'lorem IPSUM DoLoR'.split()
['lorem', 'IPSUM', 'DoLoR']
>>> 'lorem IPSUM DoLoR'.split(' ', 1)
['lorem', 'IPSUM DoLoR']
```

### <a name="rsplit"></a>str.rsplit(sep=None, maxsplit=-1) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.rsplit)
Divide a string através do separador, partindo da direita pra esquerda.
Se o _maxsplit_ for provido, divide até encontra o máximo de separadores.
```python
>>> 'lorem IPSUM DoLoR'.rsplit(' ')
['lorem', 'IPSUM', 'DoLoR']
>>> 'lorem IPSUM DoLoR'.rsplit(' ', 1)
['lorem IPSUM', 'DoLoR']
```

### <a name="strip"></a>str.strip([chars]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.strip)
Retorna uma cópia da string com os _chars_ removidos.<br>
Remove espaços se não for provido _chars_.<br>
Atenção: a string deve na notação de objeto bytes.
```python
>>> b'   spacious   '.strip()
b'spacious'
>>> b'www.example.com'.strip(b'cmowz.')
b'example'
```

### <a name="lstrip"></a>str.lstrip([chars]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.lstrip)
Retorna uma cópia da string com os _chars_ removidos a esquerda.<br>
Remove espaços se não for provido _chars_.<br>
```python
>>> '   spacious   '.lstrip()
'spacious   '
>>> 'www.example.com'.lstrip('cmowz.')
'example.com'
```

### <a name="rstrip"></a>str.rstrip([chars]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.rstrip)
Retorna uma cópia da string com os _chars_ removidos a direita.<br>
Remove espaços se não for provido _chars_.<br>
```python
>>> '   spacious   '.rstrip()
'   spacious'
>>> 'mississippi'.rstrip('ipz')
'mississ'
```

### <a name="replace"></a>str.replace(old, new[, count]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.replace)
Substitui o _old_ por _new_ na string.<br>
Retorna uma cópia da string.<br>
Se o _count_ for provido, substitui somente esta quantidade.
```python
>>> 'lorem IPSUM DoLoR'.replace('o','x')
'lxrem IPSUM DxLxR'
>>> 'lorem IPSUM DoLoR'.replace('o','x', 2)
'lxrem IPSUM DxLoR'
>>> 'lorem IPSUM DoLoR'.replace('o','x', 1)
'lxrem IPSUM DoLoR'
```

### <a name="zfill"></a>str.zfill(width) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.zfill)
Retorna uma string com o tamanho _width_ completando com zeros a esquerda.
```python
>>> '1'.zfill(2)
'01'
>>> '45'.zfill(5)
'00045'
```

### <a name="splitlines"></a>str.splitlines([keepends]) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.splitlines)
Retorna uma lista com as linhas quebradas na string.<br>
As quebras de linha não aparecem no resultado, exceto se _keepends_ for True.
```python
>>> 'ab c\n\nde fg\rkl\r\n'.splitlines()
['ab c', '', 'de fg', 'kl']
>>> 'ab c\n\nde fg\rkl\r\n'.splitlines(keepends=True)
['ab c\n', '\n', 'de fg\r', 'kl\r\n']
```

### <a name="maketrans"></a>str.maketrans(from, to) [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.maketrans)
Cria uma tabela de tradução pra ser usada no método _str.translate()_.<br>
A tabela deve ser de igual tamanho no _from_ e _to_. 
```python
>>> ''.maketrans({'a': 'x', 'b': 'y', 'c': 'z'})
{97: 'z', 98: 'y', 99: 'z'}

```

### <a name="translate"></a>str.translate(table, delete=b'') [:green_book: docs](https://docs.python.org/3/library/stdtypes.html#str.translate)
Retorna uma string traduzida com uma _table_ que é criada com _str.maketrans()_.<br>
Em caso de provido _delete_, deleta os bytes da lista na string.
```python
>>> table = ''.maketrans({'a':'x', 'b':'y', 'c':'z'})
>>> 'abc123cba'.translate(table)
'xyz123zyx'
>>> b'read this short text'.translate(None, b'aeiou') # só funciona na versão 3.6+
b'rd ths shrt txt'
```