# Manual configurar github por ssh

## Instalacion de la clave en Github

Mediante la siguiente linea de comandos , pediremos a la consola que nos muestre la clave 
Importante debemos agregar .pub para indicar que queremos la clave publica , si damos la privada estamos muertos.

```bash
$ cat ~/.ssh/id_ed25519.pub
```

Posteriormente copiamos dicha clave y nos vamos al navegador a la ventada de Github donde has de seguir estos pasos

    1. Pinchar en tu foto de perfil

    2. Pulsa en Ajustes (o Settings si lo tienes en ingles) 

    3. Dentro del bloque de Access entrar en SSH and GPG keys
    4. Clickar en New SSH Key
    5. Indicas el nombre de la llave

    6. Seleccionamos Llave de Autentificacion (Authentication Key)

    En el bloque siguiente (abajo) pegamos la clave que nos dio la consola de GitBash al ejecutar la anterior linea
    ![imagen ssh](img/bloque_pegar_clave.png)

    Pulsar Add SSH key

Te aparecera asi
![imagen ssh](img/llave.png)

## Anadir la clave a Agent

## Verificar la clave
