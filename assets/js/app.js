const listaTareas = document.getElementById("listaTareas");
    const tareaInput = document.getElementById("tareas");
    const btnAgregarTarea = document.getElementById("agregarTareas");
    const numerotareas = document.getElementById("ntareas");
    const numerotareasr = document.getElementById("ntareasr");
    const tareas = [];

    btnAgregarTarea.addEventListener("click", () => {
        const nuevaTarea = tareaInput.value.trim();

        if (nuevaTarea !== "") {
            const tarea = { id: Date.now(), nombre: nuevaTarea, completada: false };
            tareas.push(tarea);
            tareaInput.value = "";
            renderTareas();
        }
    });

    function renderTareas() {
        listaTareas.innerHTML = "";

        for (let tarea of tareas) {
            listaTareas.innerHTML += `
                <tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.nombre}</td>
                    <td><input type="checkbox" onchange="checkTarea(${tarea.id})" ${tarea.completada ? 'checked' : ''}></td>
                    <td><button onclick="borrar(${tarea.id})">Eliminar</button></td>
                </tr>`;
        }

        numerotareas.textContent = `Número de Tareas: ${tareas.length}`;
        numerotareasr.textContent = `Número de Tareas Realizadas: ${tareas.filter(t => t.completada).length}`;
    }

    function checkTarea(id) {
        const tarea = tareas.find((ele) => ele.id == id);
        tarea.completada = !tarea.completada;
        renderTareas();
    }

    function borrar(id) {
        const index = tareas.findIndex((ele) => ele.id == id);
        tareas.splice(index, 1);
        renderTareas();
    }
    renderTareas();