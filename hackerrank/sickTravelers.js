function traceDiseases(initialStates){
    let employees = initialStates.map(e => {
        let info = e.split(' ')
        return {
            name: info[0],
            status: info[1],
            office: info.slice(2)
        }
    })

    let employeeStatuses = {}

    for(e in employees){
        employeeStatuses[employees[e].name] = [employees[e].status]
    }

    // Check if all healthy

    let allHealthy = employees.every(e => e.status === 'HEALTHY')
    if(allHealthy){
        return true
    }
    
    // Check who is sick after first day

    let infected = {}

    employees.forEach(e => {
        
    })

}
console.log(traceDiseases([ 'Isabella RECOVERING DC', 'Jamal HEALTHY PaloAlto' ]))