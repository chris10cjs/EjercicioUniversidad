/* Consigna: 
Se requiere generar un sistema para realizar estadísticas sobre los egresados en la universidad.
1.	El alumno deberá ingresar:
	o	Nombre del alumno
	o	Carrera (Programación, Psicología, Diseño gráfico)
	o	Estado de la carrera: en curso-abandono-finalizado
	o	Sexo (femenino-masculino-nobinario)
	o	Edad (18 o más)
	o	Nota (entre 1 y 10) 
2.	Se desconoce la cantidad de alumnos que se ingresaran.
3.	Se deberán validar los casos resaltados en negrita.
4.	El programa deberá informar a través del documento html:
	A.	Cantidad total de alumnos de cada carrera.
	B.	Cantidad total de mujeres que cursan la carrera de programación
	C.	Cantidad de alumnos no binarios.
	D.	Promedio de notas de los alumnos finalizantes.
	E.	Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
	F.	Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.
	G.	¿Cuál es la carrera que tiene más alumnos? */

function probarEjercicio()
{
	var alumno;
	var carrera;
	var estadoCarrera;
	var sexo;
	var edad;
	var nota;
	var seguir;
	var cantidadAlumnosDiseño;
	var cantidadAlumnosProgramacion;
	var cantidadAlumnosPsicologia;
	var cantidadMujeresProgramacion;
	var cantidadNobinario;
	var acumuladorNota;
	var finalizantes;
	var promedioNotaFinalizantes;
	var alumnoViejoPsicologia;
	var sexoAlumnoViejoPsicologia;
	var edadAlumnoViejoPsicologia;
	var alumnoNobinarioPsicologia;
	var notaAlumnoNobinarioPsicologia;
	var estadoCarreraAlumnoNobinarioPsicologia;
	var bandera;

	cantidadAlumnosDiseño = 0;
	cantidadAlumnosProgramacion = 0;
	cantidadAlumnosPsicologia = 0;
	cantidadMujeresProgramacion = 0;
	cantidadNobinario = 0;
	acumuladorNota = 0;
	finalizantes = 0;
	bandera = 0;

	do
	{

		alumno = prompt("Ingrese su nombre: ");

		// ---------- VALIDACION CARRERA ----------------
		carrera = prompt("Ingrese su carrera: ");
		carrera = carrera.toLowerCase();

		while(carrera != "programacion" && carrera !="psicologia" && carrera != "diseño grafico")
		{
			carrera = prompt("Error!! ingrese su carrera: ");
			carrera = carrera.toLowerCase();
		}
		alert("Su carrera es: " + carrera);

		// ------ VALIDACION ESTADO DE LA CARRERA ------------
		estadoCarrera = prompt("Ingrese el estado de la carrera: ");
		estadoCarrera = estadoCarrera.toLowerCase();

		while(estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado")
		{
			estadoCarrera = prompt("Error!! ingrese su estado de carrera: ");
			estadoCarrera = estadoCarrera.toLowerCase();
		}
		alert("Su estado de carrera es: " + estadoCarrera);

		// ------ VALIDACION SEXO ------------
		sexo = prompt("Ingrese su sexo: ");
		sexo = sexo.toLowerCase();

		while(sexo != "femenino" && sexo != "masculino" && sexo != "nobinario")
		{
			sexo = prompt("Error!! ingrese su sexo: ");
			sexo = sexo.toLowerCase();
		}
		alert("Su sexo es " + sexo);

		// ------ VALIDACION EDAD ------------
		edad = prompt("Ingrese su edad: ");
		edad = parseInt(edad);

		while(edad < 18 || edad > 90)
		{
			edad = prompt("Error!! ingrese su edad: ");
			edad = parseInt(edad);
		}
		alert("Su edad es " + edad);

		// ------ VALIDACION NOTA ------------
		nota = prompt("Ingrese su nota: ");
		nota = parseInt(nota);

		while(nota < 0 || nota > 10)
		{
			nota = prompt("Error!! ingrese su nota: ");
			nota = parseInt(nota);
		}
		alert("Su nota es " + nota);

		//-------- ESTADISTICAS DE ALUMNOS ---------------
		
		//-------Alumnos por Carrera---------------
		switch(carrera)
		{
			case "diseño grafico":
				cantidadAlumnosDiseño ++;
			break;
			case "programacion":
				cantidadAlumnosProgramacion ++;
			break;
			case "psicologia":
				cantidadAlumnosPsicologia ++;
				//alumno mas viejo
				if(bandera == 0)
				{
					edadAlumnoViejoPsicologia = edad;
					alumnoViejoPsicologia = alumno;
					sexoAlumnoViejoPsicologia = sexo;
					notaAlumnoNobinarioPsicologia = nota;
				}
				if(edad > edadAlumnoViejoPsicologia)
				{
					edadAlumnoViejoPsicologia = edad;
					alumnoViejoPsicologia = alumno;
					sexoAlumnoViejoPsicologia = sexo;
				}
				//mejor alumno nobinario
				if(nota > notaAlumnoNobinarioPsicologia)
				{
					notaAlumnoNobinarioPsicologia = nota;
					alumnoNobinarioPsicologia = alumno;
					estadoCarreraAlumnoNobinarioPsicologia = estadoCarrera;
				}
			break;
		}
		//Carrera con más alumnos?
		
		//-------Alumnas Programación y total no binarios----------
		switch(sexo)
		{
			case "femenino":
				if(carrera == "programacion")
				{
					cantidadMujeresProgramacion ++;
				}
			break;
			case "nobinario":
				cantidadNobinario ++;
			break;
		}

		//---------Promedio nota egresados----------------------
		switch(estadoCarrera)
		{
			case "finalizado":
				finalizantes++;
				acumuladorNota = acumuladorNota + nota;
				promedioNotaFinalizantes = acumuladorNota/finalizantes;
			break;
		}

		seguir = confirm("Desea continuar ingresando alumnos? ");

	} while(seguir == true);

	document.write("La cantidad de alumnos de diseño gráfico son " + cantidadAlumnosDiseño + "<br>");
	document.write("La cantidad de alumnos de programación son " + cantidadAlumnosProgramacion + "<br>");
	document.write("La cantidad de alumnos de psicología son " + cantidadAlumnosPsicologia + "<br>");
	document.write("La cantidad de mujeres de programacion son " + cantidadMujeresProgramacion + "<br>");
	document.write("La cantidad de no binarios son " + cantidadNobinario + "<br>");
	document.write("El promedio de nota de alumnos egresados es " + promedioNotaFinalizantes + "<br>");
	document.write("El alumno mas viejo en Psicología es " + alumnoViejoPsicologia + " y la edad es " + edadAlumnoViejoPsicologia + " y es de sexo " + sexoAlumnoViejoPsicologia +  "<br>");
	document.write("El mejor alumno no binario en Psicología es " + alumnoNobinarioPsicologia + " y su nota es " + notaAlumnoNobinarioPsicologia + " y su estado en la carrera es: " + estadoCarreraAlumnoNobinarioPsicologia +  "<br>");
	

}
		