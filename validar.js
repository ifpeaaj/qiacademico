 
	/*Função para Validar Formulário*/
	function validaDadosP() {
	var nome = document.getElementById("nome");
		if(nome.value==""){
			alert("Nome é Obrigatório!");
			nome.focus();
			return false;
		}
		
	var data = document.getElementById("data");
		if(data.value ==""){
		alert("Data de Nascimento é Obrigatório!");
		data.focus();
		return false;

		}

	var cpf = document.getElementById("cpf");
		if(cpf.value ==""){
		alert("CPF é Obrigatório!");
		cpf.focus();
		return false;
		
		}

	
	var matricula = document.getElementById("matricula");
		if(matricula.value ==""){
		alert("Matricula é Obrigatório!");
		matricula.focus();
		return false;

		}

	var sexo = document.getElementById("sexo");
		if(sexo.value==""){
		alert("Sexo é Obrigatório!");
		sexo.focus();
		return false;

		}
		return true;
		}
		/*Função para Validar Comprovante*/
	
		function validaComprovanteM(){
		var aluno = document.getElementById("aluno");
		if(aluno.value==""){
			alert("Aluno é Obrigatório!");
			aluno.focus();
			return false;
		}	
		var semestre = document.getElementById("semestre");
		if(semestre.value==""){
			alert("Semestre é Obrigatório!");
			semestre.focus();
			return false;
		}
		
		var tipo = document.getElementsByName("tipo");
		if(tipo[0].checked ==false && tipo[1].checked==false){
		alert("Emissão é Obrigatório!");
		tipo[0].focus();
		return false;
		}



		return true;
	}


		
		function validaNotasFaltas(){
			var aluno = document.getElementById("aluno");
			if(aluno.value==""){
			alert("Aluno é Obrigatório!");
			aluno.focus();
			return false;
		}	
		var disciplina = document.getElementById("disciplina");
		if(disciplina.value==""){
			alert("Disciplina é Obrigatório!");
			disciplina.focus();
			return false;
		}



		return true;
	}

	
		function validaProjetoP(){
		var nome = document.getElementById("professor");
		if(professor.value==""){
			alert("Professor é Obrigatório!");
			professor.focus();
			return false;
		}	
		var titulo = document.getElementById("tituloprojeto");
		if(tituloprojeto.value==""){
			alert("Titulo do Projeto é Obrigatório!");
			tituloprojeto.focus();
			return false;
		}
		
		var text = document.getElementById("text");
		if(text.value==""){
			alert("Descricão é Obrigatório!");
			text.focus();
			return false;
		}



		return true;
	}

	
		function validaRnotas(){
		var aluno = document.getElementById("aluno");
		if(aluno.value==""){
			alert("Aluno é Obrigatório!");
			aluno.focus();
			return false;
		}	
		var disciplina = document.getElementById("disciplina");
		if(disciplina.value==""){
			alert("Disciplina é Obrigatório!");
			disciplina.focus();
			return false;
		}
		var unidade = document.getElementsByName("unidade");
		if(unidade[0].checked ==false && unidade[1].checked==false){
		alert("Unidade é obrigatório!");
		unidade[0].focus();
		return false;
		}
		var notas = document.getElementById("notas");
		if(notas.value==""){
			alert("Notas é Obrigatório!");
			notas.focus();
			return false;
		}



		return true;
	}
	
	
		function validaRfaltas(){
		var aluno = document.getElementById("aluno");
		if(aluno.value==""){
			alert("Aluno é Obrigatório!");
			aluno.focus();
			return false;
		}	
		var disciplina = document.getElementById("disciplina");
		if(disciplina.value==""){
			alert("Disciplina é Obrigatório!");
			disciplina.focus();
			return false;
		}
		var matricula = document.getElementById("matricula");
		if(matricula.value==""){
			alert("Matricula é Obrigatório!");
			matricula.focus();
			return false;
		}
		
		var faltas = document.getElementById("faltas");
		if(faltas.value==""){
			alert("Número de faltas é Obrigatório!");
			faltas.focus();
			return false;
		}



		return true;
	}



		function validaRmatriculas(){
		
		var aluno = document.getElementById("aluno");
		if(aluno.value==""){
			alert("Aluno é Obrigatório!");
			aluno.focus();
			return false;
		}
		
		var curso = document.getElementById("curso");
		if(curso.value==""){
			alert("Curso é Obrigatório!");
			curso.focus();
			return false;
	
	}
		var turno = document.getElementsByName("turno");
		if(turno[0].checked==false && turno[1].checked==false){
			alert("Turno é Obrigatório!");
			turno[0].focus();
			return false;
	
	}
	
	var semestre = document.getElementById("semestre");
		if(semestre.value==""){
			alert("Semestre é Obrigatório!");
			semestre.focus();
			return false;
	
	}
	
	var disciplina = document.getElementById("disciplina");
		if(disciplina.value==""){
			alert("Disciplina é Obrigatório!");
			disciplina.focus();
			return false;
	
	}
	
	
			return true;
	
	}	
		
		
		
	  function validaEmitirH(){
		
		var aluno = document.getElementById("aluno");
		if(aluno.value==""){
			alert("Aluno é Obrigatório!");
			aluno.focus();
			return false;
		}	
		var matricula = document.getElementById("matricula");
		if(matricula.value ==""){
		alert("Matricula é Obrigatório!");
		matricula.focus();
		return false;

		}
			return true;
	
	}
		
		 
	
	function validaCadastroP() {
	var nome = document.getElementById("nome");
		if(nome.value==""){
			alert("Nome é Obrigatório!");
			nome.focus();
			return false;
		}

	var cpf = document.getElementById("cpf");
		if(cpf.value ==""){
		alert("CPF é Obrigatório!");
		cpf.focus();
		return false;

		}

	var matricula = document.getElementById("matricula");
		if(matricula.value ==""){
		alert("Matricula é Obrigatório!");
		matricula.focus();
		return false;

		}
		
		var data = document.getElementById("data");
		if(data.value ==""){
		alert("Data de Nascimento é Obrigatório!");
		data.focus();
		return false;

		}

	var sexo = document.getElementById("sexo");
		if(sexo.value==""){
		alert("Sexo é Obrigatório!");
		sexo.focus();
		return false;

		}
		return true;
		}

	
		/*Função para Mascaras dos Forulários*/
		
		
		function MascaraCPF(cpf){
        if(mascaraInteiro(cpf)==false){
                event.returnValue = false;
        }       
        return formataCampo(cpf, '000.000.000-00', event);
}

