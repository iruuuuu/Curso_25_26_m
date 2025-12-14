//frc tabulador
export default function createSearchCard(onSearch) {


    //variables privadas
    let isSearching = false;

    //DOM
    const container = document.createElement('div');
    container.className = "bg-wite shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-20 mx-auto w-1/2";

    const title = document.createElement('h2')
    title.className = 'title'
    title.textContent="Buscar ciudad"

    const input = document.createElement('input');
    input.className = 'input';
    input.type = 'text';
    input.placeholder = 'Buscar ciudad';

    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Buscar';

//crear un componente de tipo parrafo llamado statusElement que permita especificar los siguientes estados a traves de la funcion setStatus(message,type="info")
//los tados son :
//loading - azul-600
//error - rojo600
//success   - verde600
//info - gris600

//que permita modificar el valor del componente statusElement

const statusElement= document.createElement('p')
statusElement.className='status'

function setStatus(message,type="info"){
    //mediante un switch
    switch(type){
        case 'loading':
            statusElement.className='loading'
            break;
        case 'error':
            statusElement.className='error'
            break;
        case 'success':
            statusElement.className='success'
            break;
        case 'info':
            statusElement.className='info'
            break;
        default:
            statusElement.className='info'
            break;
    }
    statusElement.textContent=message
}

//realizar busqueda

    async function performSearch() {
        const cityName = input.value.trim();
        if(!cityName){
            setStatus('Debes ingresar un nombre de ciudad', 'error')
            return
        }
        isSearching=true;
        try {
            await onSearch(cityName);
            setStatus('Ciudad encontrada', 'success');
        } catch (error) {
            setStatus('Ciudad no encontrada', 'error');
            throw new Error(error);
        } finally {
            isSearching = false;
        }
    }

    //eventos
    button.addEventListener('click', performSearch);
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch(); //aqui va con () porque queremos que aqui se ejecute la funcion
        }
    });

    //devolver el componente
    container.appendChild(title);
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(statusElement)


  return{
    element: container,
    focus: () => input.focus(),
    clearForm: () => {
        input.value = '';
        setStatus('Ingresa una ciudad para buscar el clima.', 'info');
        isSearching = false;
    },
    getValue: () => input.value.trim()
  }
}
