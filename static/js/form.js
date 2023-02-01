// exit form  ----->

// document.querySelector('.exit-modal').addEventListener('click',()=>{
//     document.querySelector('.modal').close();
// });

// exit form  ----->

// image input drag and drop (form) ----->

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
	const dropZoneElement = inputElement.closest(".drop-zone");
	dropZoneElement.addEventListener("click", (e) => {
		inputElement.click();
	});
	inputElement.addEventListener("change", (e) => {
		if (inputElement.files.length) {
			updateThumbnail(dropZoneElement, inputElement.files[0]);
		}
	});
	dropZoneElement.addEventListener("dragover", (e) => {
		e.preventDefault();
		dropZoneElement.classList.add("drop-zone--over");
	});
	["dragleave", "dragend"].forEach((type) => {
		dropZoneElement.addEventListener(type, (e) => {
			dropZoneElement.classList.remove("drop-zone--over");
		});
	});
	dropZoneElement.addEventListener("drop", (e) => {
		e.preventDefault();

		if (e.dataTransfer.files.length) {
			inputElement.files = e.dataTransfer.files;
			updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
		}
		dropZoneElement.classList.remove("drop-zone--over");
	});
});
/**
 * Updates the thumbnail on a drop zone element.
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
	let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
	// First time - remove the prompt
	if (dropZoneElement.querySelector(".drop-zone__prompt")) {
		dropZoneElement.querySelector(".drop-zone__prompt").remove();
	}
	// First time - there is no thumbnail element, so lets create it
	if (!thumbnailElement) {
		thumbnailElement = document.createElement("div");
		thumbnailElement.classList.add("drop-zone__thumb");
		dropZoneElement.appendChild(thumbnailElement);
	}
	thumbnailElement.dataset.label = file.name;
	// Show thumbnail for image files
	if (file.type.startsWith("image/")) {
		const reader = new FileReader();

		reader.readAsDataURL(file);
		reader.onload = () => {
			thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
		};
	} else {
		thumbnailElement.style.backgroundImage = null;
	}
}

// image input drag and drop (form) ----->
    
// fecha form ---->
  
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();
document.getElementById('fecha-actual').innerHTML = month + "/" + day + "/" + year;
  
// fecha form ---->

const campos = {
    nombre_apellido: false,
    fecha_nacimiento: false,
    lugar_nacimiento: false,
    cedula_identidad: false,
    numero_beneficiario: false,
    nombre_conyuge: true,
    direccion_laboral: false,
    entidad_dependencia: false,
    profesion_ocupacion: false,
    especialidad: false,
    disposicion_legal_jubilacion: false,
    resolucion_numero: false,
    imagen_cedula_frente: false,
    imagen_cedula_atras: false
}

let estadoCivil = document.getElementById("id_estado_civil");
let conyuge = document.getElementById("conyuge__container")
if (estadoCivil.value !== "Casado/a"){
    conyuge.style.display = "none"
}
estadoCivil.addEventListener('change', function handleChange(e){
	if (e.target.value === "Casado/a"){
		conyuge.style.display = "block"
        campos.nombre_conyuge = false
	} else {
		conyuge.style.display = "none"
        campos.nombre_conyuge = true
	}
});

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre_apellido: /^[a-zA-ZÀ-ÿs.]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    fecha_nacimiento: /^\d{4}\-\d{2}\-\d{2}$/, // Fecha formato DD/MM/AAAA
    lugar_nacimiento:/^[a-zA-ZÀ-ÿ0-9s-.]{3,40}$/ ,
    cedula_identidad: /\d{1}([.]\d{3}){2}/, // Cedula Identidad Paraguay
    numero_beneficiario: /^\d{1,40}$/, // Numero beneficiario
    nombre_conyuge: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
    direccion_laboral: /^[a-zA-Z0-9 \s \. \\ \-]{1,40}$/,
    entidad_dependencia: /^[a-zA-Z0-9\s\.]{1,40}$/,
    profesion_ocupacion: /^[a-zA-Z0-9\s\.]{1,40}$/,
    especialidad: /^[a-zA-Z0-9\s\.]{1,40}$/,
    disposicion_legal_jubilacion:  /^[a-zA-Z0-9\s\.]{1,40}$/,
    resolucion_numero: /^[a-zA-Z0-9\s\.]{1,40}$/,
}
const validarFormulario = (e) => {
    switch(e.target.name){
        case 'nombre_apellido':
            validarInput(expresiones.nombre_apellido,e.target,'nombre_apellido');
        break
        case 'fecha_nacimiento':
            validarInput(expresiones.fecha_nacimiento,document.getElementById('id_fecha_nacimiento'),'fecha_nacimiento');
        break
        case 'lugar_nacimiento':
            validarInput(expresiones.lugar_nacimiento,e.target,'lugar_nacimiento')
        break
        case 'cedula_identidad':
            validarInput(expresiones.cedula_identidad,e.target,'cedula_identidad')
        break
        case 'numero_beneficiario':
            validarInput(expresiones.numero_beneficiario,e.target,'numero_beneficiario')
        break
        case 'nombre_conyuge':
            validarInput(expresiones.nombre_conyuge,e.target,'nombre_conyuge')
        break
        case 'direccion_laboral':
            validarInput(expresiones.direccion_laboral,e.target,'direccion_laboral')
        break
        case 'entidad_dependencia':
            validarInput(expresiones.entidad_dependencia,e.target,'entidad_dependencia')
        break
        case 'profesion_ocupacion':
            validarInput(expresiones.profesion_ocupacion,e.target,'profesion_ocupacion')
        break 
        case 'especialidad':
            validarInput(expresiones.especialidad,e.target,'especialidad')
        break
        case 'disposicion_legal_jubilacion':
            validarInput(expresiones.disposicion_legal_jubilacion,e.target,'disposicion_legal_jubilacion')
        break
        case 'resolucion_numero':
            validarInput(expresiones.resolucion_numero,e.target,'resolucion_numero')
        break
   }    
}
const imageValidation = (input,campo) => {
    let input_1 = input;
    let inputRute_1 = input_1.value;
    imgExpresion = /\w.+\.(jpeg|jpg|png)/;
    if(!imgExpresion.exec(inputRute_1)){
        campos[campo] =  false;
        document.getElementById(`${campo}__grupo`).classList.add(`${campo}__grupo-incorrecto`)
        document.getElementById(`${campo}__grupo`).classList.remove(`${campo}__grupo-correcto`)
        document.querySelector(`#${campo}__grupo .mensaje-error`).classList.add('mensaje-error-activo')
    } else {
        campos[campo] =  true;
        document.getElementById(`${campo}__grupo`).classList.add(`${campo}__grupo-correcto`)
        document.getElementById(`${campo}__grupo`).classList.remove(`${campo}__grupo-incorrecto`)
        document.querySelector(`#${campo}__grupo .mensaje-error`).classList.remove('mensaje-error-activo')
    }
}


const  validarInput = (expresion,input,campo) => {
    if(!expresion.test(input.value) || input.value.trim() == ""){
        document.getElementById(`${campo}__grupo`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`${campo}__grupo`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#${campo}__grupo i`).classList.add('fa-circle-xmark');
        document.querySelector(`#${campo}__grupo i`).classList.remove('fa-circle-check');
        document.querySelector(`#${campo}__grupo .mensaje-error`).classList.add('mensaje-error-activo')
        campos[campo] = false
    } else {
        document.getElementById(`${campo}__grupo`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`${campo}__grupo`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#${campo}__grupo i`).classList.add('fa-circle-check');
        document.querySelector(`#${campo}__grupo i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#${campo}__grupo .mensaje-error`).classList.remove('mensaje-error-activo')
        campos[campo] = true
    } 
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e) => {
    const terminos = document.getElementById('termsAndConditions')
    if(terminos.checked){
        document.querySelector('.mensaje-terminos-error').style.display='none'
        if(campos.nombre_apellido && campos.fecha && campos.lugar_nacimiento && campos.cedula_identidad && campos.numero_beneficiario && campos.nombre_conyuge && campos.direccion_laboral && campos.entidad_dependencia && campos.profesion_ocupacion && campos.especialidad && campos.disposicion_legal_jubilacion && campos.resolucion_numero && campos.imagen_cedula_frente && campos.imagen_cedula_atras){
            formulario.reset();
        }else{
            e.preventDefault();
        }
    } else {
        e.preventDefault();
    }       
});

/*----- Formato Cedula Paraguaya -----*/
document.addEventListener('DOMContentLoaded',function(){
    applyInputMask('id_cedula_identidad','0.000.000');
});
function applyInputMask(elementId, mask){
    let inputElement = document.getElementById(elementId);
    let content = '';
    let maxChars = numberCharactersPattern(mask);
    inputElement.addEventListener('keydown',function(e){
        e.preventDefault();
        if (isNumeric(e.key) && content.length < maxChars){
            content += e.key;
        }
        if(e.keyCode == 8){
            if(content.length > 0){
                content = content.substring(0, content.length - 1)
            };
        };
        inputElement.value = maskIt(mask,content)
    });
};
function numberCharactersPattern(pattern){
    let numberChars = 0;
    for (let i = 0; i < pattern.length; i++){
        if(pattern[i] === '0'){
            numberChars++;
        }
    }
    return numberChars;
};
function isNumeric(char){
    return !isNaN(char - parseInt(char));
};
function maskIt(pattern,value){
    let position = 0;
    let currentChar = 0;
    let masked = '';
    while(position < pattern.length && currentChar < value.length){
        if(pattern[position] == '0'){
            masked += value[currentChar];
            currentChar++;
        }else{
            masked += pattern[position];
        }
        position++
    };
    return masked
};

/*----- Formato Cedula Paraguaya -----*/