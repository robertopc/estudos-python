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
- [Criando Aplicações](#criar-aplicacao)
    - [Estrutura da Aplicação](#estrutura-aplicacao)
        - [\_\_init\_\_.py](#init-app)
        - [admin.py ](#admin-app) 
        - [apps.py ](#apps-app) 
        - [migrations/](#migrations-app)
        - [models.py](#models-app)  
        - [tests.py](#tests-app)  
        - [views.py](#views-app)
        
    - [MVC para MTV](#mvc-mtv)
- [Servidor de desenvolvimento](#servidor-dev)
- [Criando um Hello World](#hello-world)
    - [Criando um Hello World com templates](#hello-world-template)
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

```
__init__.py
settings.py
urls.py
wsgi.p
```

### <a name="initpy"></a>__init__.py
Arquivo vazio para indicar ao Python que é um módulo.

### <a name="settingspy"></a>settings.py
Este é o arquivo principal do projeto, nele contém todas as configurações do projeto.

A seguir algumas das principais configurações a serem alteradas.
```python
DEBUG = True # Alterar para False em produção

LANGUAGE_CODE = 'en-us' # mudar para pt-br

TIME_ZONE = 'UTC' # mudar para America/Sao_Paulo

INSTALLED_APPS = [
... # lista com as aplicações instaladas
'nomedoprojeto.nomedaaplicacao', # adicionar as aplicações criadas dessa maneira
]
```
### <a name="urlspy"></a> urls.py

Este arquivo contém as rotas pra nossas aplicações, ou seja, as urls que direcionam para as Views.

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

Depois de criada, devemos inserir a aplicação no `INSTALLED_APPS`.

> Nota 1: Como aplicação principal, é uma convenção usar o nome `core`.

> Nota 2: Não pode nomear a aplicação com palavras reservadas do Django, por exemplo `site`.

### <a name="estrutura-aplicacao"></a>Estrutura da Aplicação

Ao criarmos a aplicação, é gerada a estrutura padrão a seguir.

```
__init__.py  
admin.py  
apps.py  
migrations/
    __init__.py
models.py  
tests.py  
views.py
```

#### <a name="init-app"></a>\_\_init\_\_.py

O mesmo que o \_\_ini\_\_.py do Projeto[¹](#initpy).

#### <a name="admin-app"></a>admin.py

Este arquivo contém os modelos para o backend desta aplicação.

#### <a name="apps-app"></a>apps.py

Este arquivo descreve configurações da aplicação.

#### <a name="migrations-app"></a>migrations/

Diretório contendo as migrações para o banco de dados, ou seja, um versionamento do banco de dados feito pelo ORM.

#### <a name="models-app"></a>models.py

Este arquivo contém os modelos de dados da aplicação. As classes deste arquivo são usadas pelo ORM para criar a estruturas de dados do banco de dados.

#### <a name="tests-app"></a>tests.py

Este é o arquivo onde devem ser escritos os testes da aplicação.

#### <a name="views-app"></a>views.py

Este é o arquivo controlador da aplicação, ele faz a interface entre os modelos e os templates.

### <a name="mvc-mtv"></a>Padrão MVC para MTV

O Django utiliza o padrão de projeto MTV(Model, Template, View). Possui o mesmo conceito que o MVC, porém o `Template = View` e `View = Control`.

MVC     | MTV
---     | ---
Model   | Model
View    | Template
Control | View

## <a name="servidor-dev"></a>Servidor de desenvolvimento
Para desenvolvermos subimos um servidor local de desenvolvimento pelo terminal.
Através do comando a seguir.
```
python manage.py runserver
```

Este comando gerará uma url para visualizarmos no navegador, geralmente com o endereço `http://127.0.0.1:8000` ou `http://localhost:8000`.

## <a name="hello-world"></a> Criando um Hello World

Para criar uma aplicação de Hello World no Django, primeiro utilizaremos o comando de criação de aplicação.
```
python manage.py startapp core
```

Em seguida inseriremos o seguinte código no `views.py`.

```python
from django.shortcuts import render
from django.http import HttpResponse

def home(request): # views sempre devem receber o parametro 'request'
    return HttpResponse('<h1>Hello World!</h1>')

```

Neste exemplo passamos a mensagem de forma bruta para o servidor, não utilizamos templates(o que não é a maneira mais correta).
A seguir devemos inserir a rota da aplicação no `urls.py` do projeto. Segue o código do `urls.py`.

```python
from django.conf.urls import url
from django.contrib import admin

from todo.core import views # primeiro importamos as views da aplicação

urlpatterns = [
    url(r'', views.home ), # adicionamos a rota a views.home
    url(r'^admin/', admin.site.urls),
]
```

### <a name="hello-world-template"></a> Criando um Hello World com templates

No exemplo a seguir criaremos um Hello World com arquivos de template. 

Primeiro devemos criar os diretórios `static` e `templates` dentro da aplicação.
```bash
cd core          # diretório da aplicação
mkdir static
mkdir static/css # diretório para css
mkdir static/js  # diretório para js
mkdir templates
``` 
Criaremos 3 arquivos: 2 estáticos(css e js) e 1 template(html).

**base.html** em `templates/`
```html
<!doctype html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <div id="container">

        <h1 id="container-h1">Hello World<br><br><span></span></h1>

    </div>
</body>
</html>
```

> Nota: base.html é uma convenção de nome.

**custom.css** em `static/css/`
```css
body {
    background: #ccc;
}

#container {
    position: absolute;
    top: 33%;
    left: 33%;
    width: 33%;
    height: 33%;
    border: #000 1px solid;
    background: #fff;
    text-align: center;
    vertical-align: center;
}
```
**custom.js** em `static/js/`
```js
function horaAgora() {

    var horas = new Date().getHours();
    var minutos = new Date().getMinutes();
        minutos = minutos < 10 ? '0' + minutos : minutos ;
    var segundos = new Date().getSeconds();
    document.querySelector('#container-h1 span').innerHTML = horas + ':' + minutos + ':' + segundos;
}

setInterval(function() {

    horaAgora();
}, 1000);
```

Com estes arquivos somos capazes de criar a estrutura de templates do Django. Agora vamos editar o `base.html` para ele ler os arquivos estáticos.
O código a seguir é o arquivo editado com as `template tags` do Django.

```html
{% load staticfiles %}
<!doctype html>
<html>
<head>
    <title>Hello World</title>

    <link href="{% static "css/custom.css" %}" rel="stylesheet">
</head>
<body>
    <div id="container">

        <h1 id="container-h1">Hello World<br><br><span></span></h1>

    </div>

    <script src="{% static "js/custom.js" %}"></script>
</body>
</html>
```

Pra finalizar modificaremos a `views.py` da aplicação com o código.

```python
from django.shortcuts import render

def home(request):
    return render(request, 'base.html')

```
Agora é só rodar o servidor e ver o resultado!


## <a name="slug"></a> Em breve..
