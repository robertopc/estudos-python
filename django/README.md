# DJANGO

Este é um pequeno resumo dos meus estudos em Django.

## Iniciando
O Django é um framework para desenvolvimento web com Python. O site oficial é o [djangoproject.com](https://djangoproject.com)

A sua documentação se encontra no endereço [docs.djangoproject.com](https://docs.djangoproject.com).

## Instalação

Para instalar o Django utilize o `pip` e execute o seguinte comando.

```
pip install django
```
Se quiser uma versão específica, use o comando.
```
pip install django==2.0
```

> Nota: É recomendável instalar o Django em um ambiente virtual.

## Criando o projeto

Para criar o projeto Django, utilizamos o comando `django-admin` no terminal. Ele cria o projeto no diretório atual. Abaixo segue o código de criação.
```sh
django-admin startproject nomedoprojeto .
# ao inserir o ponto no fim dizemos para instalar o manage.py
# podemos criar sem o ponto, porém criará um diretório 'nomedoprojeto' 
# e dentro o manage.py e outro diretório 'nomedoprojeto' 
```
## Estrutura do projeto

Ao criar o projeto, o Django possui a seguinte estrutura.

```sh
__init__.py  # arquivo vazio para indicar que é um modulo
settings.py  # contém todas as configurações do projeto
urls.py      # contém as rotas para as urls
wsgi.py      # responsável pela integração com o webserver
```

### __init__.py
Arquivo vazio para indicar pro Python que é um módulo.

### settings.py
Este é o arquivo principal do projeto, nele contém todas as configurações do projeto.

A seguir algumas das principais configurações a serem alteradas.
```python
LANGUAGE_CODE = 'en-us' # mudar para pt-br
TIME_ZONE = 'America/Sao_Paulo' # muda o timezone
```

## Criando aplicações
Os arquivos anteriores são os arquivos de base de um projeto. 
Para inserirmos nossas regras de negócio, precisamos criar aplicações.
O Django trabalha de maneira modular, e em cada parte do projeto devemos criar uma aplicação. 
Também podemos usar estas aplicações em outros projetos.

Para criarmos as aplicações, utilizamos o código a seguir.
```
python manage.py startapp nomedaaplicacao
```

> Nota: como aplicação principal, é uma convenção usar o nome 'core'

## Inicializando um servidor de desenvolvimento
Para desenvolvermos criamos um servidor local de desenvolvimento no terminal.
Através do comando a seguir.
```
python manage.py runserver
```

Este comando gerará uma url para visualizarmos no navegador, geralmente com o endereço `http://127.0.0.1:8000` ou `http://localhost:8000`.

