const showError = (message: string) => {
    throw new Error(message);
} // rzuca errora nie zwraca nic, typ never

const showErrors = () => {
    while(true) {
        console.log('Error');
    }
} // funkcja nigdy się nie skończy -> typ never

const showLog = () => {
    console.log('some log');
} // funkcja nie ma return, ale zwraca undefind nie jawnie