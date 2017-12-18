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

### String Methods

A string por ser um objeto, possui alguns métodos embutidos. Como mostrados na a seguir.
Para os exemplos abaixo, iremos utilizar a ```str1 = 'lorem IPSUM DoLoR'```.

#### str.lower() [:link:](https://docs.python.org/3/library/stdtypes.html#str.lower)
Converte toda string para minúsculo.
```python
>>> str1.lower()
'lorem ipsum dolor'
```

#### str.upper() [:link:](https://docs.python.org/3/library/stdtypes.html#str.upper)
Converte toda string para maiúsculo.
```python
>>> str1.upper()
'LOREM IPSUM DOLOR'
```

#### str.swapcase() [:link:](https://docs.python.org/3/library/stdtypes.html#str.swapcase)
Inverte minúsculo para maiúsculo e vice-versa.
```python
>>> str1.swapcase()
'LOREM ipsum dOlOr'
```

#### str.capitalize() [:link:](https://docs.python.org/3/library/stdtypes.html#str.capitalize)
Deixa maiúscula primeiro caractere e minúsculos os restantes.
```python
>>> str1.capitalize()
'Lorem ipsum dolor'
```

#### str.title() [:link:](https://docs.python.org/3/library/stdtypes.html#str.title)
Deixa maiúscula a primeira letra de cada palavra e minúsculos os restantes.
```python
>>> str1.title()
'Lorem Ipsum Dolor'
```

#### str.casefold() [:link:](https://docs.python.org/3/library/stdtypes.html#str.casefold)
Parecida com a lower() porém é "mais agressiva".
```python
>>> str1.casefold()	
'lorem ipsum dolor'
```

#### str.center(width[, fillchar]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.center)
Retorna uma string com o tamanho definido em _width_ e preenche com o caracter _fillchar_ os espaços restantes. Se não for definido o _fillchar_, preenche com espaços.
```python
>>> str1.center(21, '.')
'..lorem IPSUM DoLoR..'
>>> str1.center(30)
'      lorem IPSUM DoLoR       '
```

#### str.count(sub[, start[,end]]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.count)
Conta a quantidade de vezes que _sub_ aparece na str.
```python
>>> str1.count('o')
3
>>> str1.count('z')
0
```

#### str.encode(encoding='utf-8', errors='strict') [:link:](https://docs.python.org/3/library/stdtypes.html#str.encode)
Codifica a string para um charset.
```python
>>> str1.encode()	
b'lorem IPSUM DoLoR'
```

#### str.endswith(suffix[, start[, end]]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.endswith)
Verifica se a string termina com o _suffix_.
```python
>>> str1.endswith('rt')
False
>>> str1.endswith('oR')
True
```

#### str.startswith(prefix[, start[, end]]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.startswith)
Verifica se a string começa com o _prefix_.
```python
>>> str1.startswith('lo')
True
>>> str1.startswith('Lo')
False
```

#### str.expandtabs(tabsize=8) [:link:](https://docs.python.org/3/library/stdtypes.html#str.expandtabs)
Converte tabs para espaços(padrão 8).
```python
>>> str1.expandtabs()
'lorem IPSUM DoLoR'
```

#### str.find(sub[, start[, end]]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.find)
Busca _sub_ na string e retorna o índice da primeira encontrada, retorna -1 se não encontrar nada. Atenção: método case sensitive.
```python
>>> str1.find('m')	
4
>>> str1.find('z')	
-1
```

#### str.rfind(sub[, start[, end]]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.rfind)
Busca _sub_ na string e retorna o índice da primeira encontrada começando pela direita.<br>
Retorna -1 se não encontrar nada.
```python
>>> str1.rfind('o')	
15
>>> str1.rfind('o',0,15)
13
```

#### str.rindex(sub[, start[, end]]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.rindex)
Igual o rfind, só que retorna uma exceção ValueError se não encontrar nada.
```python
>>> str1.rindex('o')	
15
>>> str1.rindex('o',0,15)
13
```

#### str.format(*args, **kwargs) [:link:](https://docs.python.org/3/library/stdtypes.html#str.format)
Formata a string substituindo os coringas {} pelos _args_.
```python
>>> "A {} de 1 + 2 é {}".format('soma', 1+2)	
'A soma de 1 + 2 é 3'
```

#### str.format_map(mapping) [:link:](https://docs.python.org/3/library/stdtypes.html#str.format_map)
Parecido com o str.format(), exceto que mapping é usado diretamente e não copiado de um dict.
```python
>>> class Default(dict):
...     def __missing__(self, key):
...         return key
...
>>> '{name} was born in {country}'.format_map(Default(name='Guido'))
'Guido was born in country'
```

#### str.index(sub[, start[, end]]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.index)
Parecido com a str.find(), exceto que se não encontrar dispara uma exceção ValueError
```python
>>> str1.index('Do')	
12
>>> str1.index('XZ')
Traceback (most recent call last):
  File "<input>", line 1, in <module>
    "abc".index('xyz')
ValueError: substring not found
```

#### str.isalnum() [:link:](https://docs.python.org/3/library/stdtypes.html#str.isalnum)
Retorna True se a string for totalmente alfanumérica.
```python
>>> str1.isalnum()
False
>>> "abc102030xyz".isalnum()
True
```

#### str.isalpha() [:link:](https://docs.python.org/3/library/stdtypes.html#str.isalpha)
Retorna True se a string for totalmente alfabética.
```python
>>> str1.isalpha()
False
>>> "abcdef".isalpha()
True
```

#### str.isdecimal() [:link:](https://docs.python.org/3/library/stdtypes.html#str.isdecimal)
Retorna True se a string for totalmente decimal.
```python
>>> str1.isdecimal()
False
>>> "125457836".isdecimal()
True
```

#### str.isdigit() [:link:](https://docs.python.org/3/library/stdtypes.html#str.isdigit)
Retorna True se a string for totalmente dígito.
```python
>>> str1.isdigit()
False
>>> "125457836".isdigit()
True
```

#### str.isidentifier() [:link:](https://docs.python.org/3/library/stdtypes.html#str.isidentifier)
Retorna True se a string for um identificador válido.
```python
>>> str1.isidentifier()
False
```

#### str.islower() [:link:](https://docs.python.org/3/library/stdtypes.html#str.islower)
Retorna True se a string for totalmente minúscula.
```python
>>> str1.islower()
False
>>> "lorem ipsum dolor".islower()
True
```

#### str.isupper() [:link:](https://docs.python.org/3/library/stdtypes.html#str.isupper)
Retorna True se a string for totalmente maiúscula.
```python
>>> str1.isupper()
False
>>> "LOREM IPSUM DOLOR".isupper()
True
```

#### str.isnumeric() [:link:](https://docs.python.org/3/library/stdtypes.html#str.isnumeric)
Retorna True se a string for totalmente numérica.
```python
>>> str1.isnumeric()
False
>>> "3.5".isnumeric()
False
>>> "123456".isnumeric()
True
```

#### str.isprintable() [:link:](https://docs.python.org/3/library/stdtypes.html#str.isprintable)
Retorna True se todos os caracteres da string forem imprimíveis ou ela for vazia.
```python
>>> str1.isprintable()
True
>>> """linha 1
... linha 2
... linha 3""".isprintable()
False
>>> "".isprintable()
True
```

#### str.isspace() [:link:](https://docs.python.org/3/library/stdtypes.html#str.isspace)
Retorna True se todos os caracteres forem espaços.
```python
>>> str1.isspace()
False
>>> " ".isspace()
True
>>> """
...
...
...         """.isspace()
True
```

#### str.istitle() [:link:](https://docs.python.org/3/library/stdtypes.html#str.istitle)
Retorna True se a string for um título(palavras iniciadas com maiúsculas e o resto minúsculas).
```python
>>> str1.istitle()
False
>>> "Lorem Ipsum D".istitle()
True
```

#### str.join(iterable) [:link:](https://docs.python.org/3/library/stdtypes.html#str.join)
Retorna uma string com os items do _iterable_ concatenados. O str neste caso serve como separador.
```python
>>> ', '.join(['Banana', 'Laranja', 'Uva'])
'Banana, Laranja, Uva'
>>> '~'.join(['a', 'b', 'c', '1', '2', '3', 'x', 'y', 'z'])
'a~b~c~1~2~3~x~y~z'
```

#### str.ljust(width[, fillchar]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.ljust)
Retorna uma string alinhada a esquerda aumentada para o _width_. Caso seja oferecido o _fillchar_ preenche com ele, senão preenche com espaço.
```python
>>> str1.ljust(30)
'lorem IPSUM DoLoR             '
>>> str1.ljust(50,'.')
'lorem IPSUM DoLoR.................................'
```

#### str.rjust(width[, fillchar]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.rjust)
Retorna uma string alinhada a direita aumentada para o _width_. Caso seja oferecido o _fillchar_ preenche com ele, senão preenche com espaço.
```python
>>> str1.rjust(30)
'             lorem IPSUM DoLoR'
>>> str1.rjust(50,'.')
'.................................lorem IPSUM DoLoR'
```

#### str.rpartition(sep) [:link:](https://docs.python.org/3/library/stdtypes.html#str.rpartition)
Divide a string através do separador, e retorna uma tupla contendo: a parte antes do separador, o separador e a parte depois do separador.
```python
>>> str1.rpartition('IPSUM')
('lorem ', 'IPSUM', ' DoLoR')
>>> "Roberto & Sabrina".rpartition(' & ')
('Roberto', ' & ', 'Sabrina')
```

#### str.split(sep=None, maxsplit=-1) [:link:](https://docs.python.org/3/library/stdtypes.html#str.split)
Divide a string através do separador, partindo da esquerda pra direita.
Se o _maxsplit_ for provido, divide até encontra o máximo de separadores.
```python
>>> str1.split()
['lorem', 'IPSUM', 'DoLoR']
>>> str1.split(' ', 1)
['lorem', 'IPSUM DoLoR']
```

#### str.rsplit(sep=None, maxsplit=-1) [:link:](https://docs.python.org/3/library/stdtypes.html#str.rsplit)
Divide a string através do separador, partindo da direita pra esquerda.
Se o _maxsplit_ for provido, divide até encontra o máximo de separadores.
```python
>>> str1.rsplit(' ')
['lorem', 'IPSUM', 'DoLoR']
>>> str1.rsplit(' ', 1)
['lorem IPSUM', 'DoLoR']
```

#### str.strip([chars]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.strip)
Retorna uma cópia da string com os _chars_ removidos.<br>
Remove espaços se não for provido _chars_.<br>
Atenção: a string deve na notação de objeto bytes.
```python
>>> b'   spacious   '.strip()
b'spacious'
>>> b'www.example.com'.strip(b'cmowz.')
b'example'
```

#### str.lstrip([chars]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.lstrip)
Retorna uma cópia da string com os _chars_ removidos a esquerda.<br>
Remove espaços se não for provido _chars_.<br>
```python
>>> '   spacious   '.lstrip()
'spacious   '
>>> 'www.example.com'.lstrip('cmowz.')
'example.com'
```

#### str.rstrip([chars]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.rstrip)
Retorna uma cópia da string com os _chars_ removidos a direita.<br>
Remove espaços se não for provido _chars_.<br>
```python
>>> '   spacious   '.rstrip()
'   spacious'
>>> 'mississippi'.rstrip('ipz')
'mississ'
```

#### str.replace(old, new[, count]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.replace)
Substitui o _old_ por _new_ na string.<br>
Retorna uma cópia da string.<br>
Se o _count_ for provido, substitui somente esta quantidade.
```python
>>> str1.replace('o','x')
'lxrem IPSUM DxLxR'
>>> str1.replace('o','x', 2)
'lxrem IPSUM DxLoR'
>>> str1.replace('o','x', 1)
'lxrem IPSUM DoLoR'
```

#### str.zfill(width) [:link:](https://docs.python.org/3/library/stdtypes.html#str.zfill)
Retorna uma string preenchida com a quantidade _width_ de zeros a esquerda.
```python
>>> '1'.zfill(2)
'01'
>>> '45'.zfill(5)
'00045'
```

#### str.splitlines([keepends]) [:link:](https://docs.python.org/3/library/stdtypes.html#str.splitlines)
Retorna uma lista com as linhas quebradas na string.<br>
As quebras de linha não aparecem no resultado, exceto se _keepends_ for True.
```python
>>> 'ab c\n\nde fg\rkl\r\n'.splitlines()
['ab c', '', 'de fg', 'kl']
>>> 'ab c\n\nde fg\rkl\r\n'.splitlines(keepends=True)
['ab c\n', '\n', 'de fg\r', 'kl\r\n']
```

#### str.maketrans(from, to) [:link:](https://docs.python.org/3/library/stdtypes.html#str.maketrans)
Cria uma tabela de tradução pra ser usada no método _str.translate()_.<br>
A tabela deve ser de igual tamanho no _from_ e _to_. 
```python
>>> ''.maketrans({'a': 'x', 'b': 'y', 'c': 'z'})
{97: 'z', 98: 'y', 99: 'z'}

```

#### str.translate(table, delete=b'') [:link:](https://docs.python.org/3/library/stdtypes.html#str.translate)
Retorna uma string traduzida com uma _table_ que é criada com _str.maketrans()_.<br>
Em caso de provido _delete_, deleta os bytes da lista na string.
```python
>>> table = ''.maketrans({'a':'x', 'b':'y', 'c':'z'})
>>> 'abc123cba'.translate(table)
'xyz123zyx'
>>> b'read this short text'.translate(None, b'aeiou') # só funciona na versão 3.6+
b'rd ths shrt txt'
```