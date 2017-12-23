# DJANGO

Este é um pequeno resumo dos meus estudos em Django.

## Índice

- [Iniciando](#iniciando)
- [Instalação](#instalacao)
- [Criando o projeto](#criar-projeto)
- [Estrutura do projeto](#estrutura-projeto)
    - [\_\_init\_\_.py](#initpy)
    - [settings.py](#settingspy)
    - [urls.py](#urlspy)
    - [wsgi.py](#wsgipy)
- [Criando aplicações](#criar-aplicacao)
- [Servidor desenvolvimento](#servidor-dev)
- []()

## <a name="iniciando"></a>Iniciando
O Django é um framework para desenvolvimento web com Python. O site oficial é o [djangoproject.com](https://djangoproject.com)

A sua documentação se encontra no endereço [docs.djangoproject.com](https://docs.djangoproject.com).

## <a name="instalacao"></a>Instalação

Para instalar o Django utilize o `pip` e execute o seguinte comando.

```
pip install django
```
Se quiser uma versão específica, use o comando.
```
pip install django==2.0
```

> Nota: É recomendável instalar o Django em um ambiente virtual.

## <a name="criar-projeto"></a>Criando o projeto

Para criar o projeto Django, utilizamos o comando `django-admin` no terminal. Ele cria o projeto no diretório atual. Abaixo segue o código de criação.
```sh
django-admin startproject nomedoprojeto .
```
Ao inserir o ponto no fim dizemos para instalar o manage.py no mesmo nível do diretório atual.
Podemos criar sem o ponto, porém criará um diretório 'nomedoprojeto' e dentro o manage.py e outro diretório 'nomedoprojeto' 

## <a name="estrutura-projeto"></a>Estrutura do projeto

Ao criar o projeto, o Django possui a seguinte estrutura.

```sh
__init__.py
settings.py
urls.py
wsgi.p
```

### <a name="initpy"></a>__init__.py
Arquivo vazio para indicar pro Python que é um módulo.

### <a name="settingspy"></a>settings.py
Este é o arquivo principal do projeto, nele contém todas as configurações do projeto.

A seguir algumas das principais configurações a serem alteradas.
```python
DEBUG = True # Alterar para False em produção

LANGUAGE_CODE = 'en-us' # mudar para pt-br

TIME_ZONE = 'America/Sao_Paulo' # muda o timezone
```
### <a name="urlspy"></a> urls.py

Este arquivo contém as rotas pra nossas aplicações, ou seja, as urls que direcionam.

### <a name="wsgipy"></a> wsgi.py

Este arquivo é responsável pela interface entre o servidor web e o projeto.

## <a name="criar-aplicacao"></a>Criando aplicações
Os arquivos anteriores são os arquivos de base de um projeto. 
Para inserirmos nossas regras de negócio, precisamos criar aplicações.
O Django trabalha de maneira modular, e em cada parte do projeto devemos criar uma aplicação. 
Também podemos usar estas aplicações em outros projetos.

Para criarmos as aplicações, utilizamos o código a seguir.
```
python manage.py startapp nomedaaplicacao
```

> Nota: como aplicação principal, é uma convenção usar o nome 'core'

## <a name="servidor-dev"></a>Servidor de desenvolvimento
Para desenvolvermos subimos um servidor local de desenvolvimento no terminal.
Através do comando a seguir.
```
python manage.py runserver
```

Este comando gerará uma url para visualizarmos no navegador, geralmente com o endereço `http://127.0.0.1:8000` ou `http://localhost:8000`.

