
export const signUpFormControls = [
  

    {
        label:'User Name',
        name:'userName',
        type:'text',
        componetType:'input',
        placeholder:'Enter user name',

    },
    {
        label:'User Email',
        name:'userEmail',
        type:'text',
        componetType:'input',
        placeholder:'Enter user email',

    },
    {
        label:'Password',
        name:'password',
        type:'text',
        componetType:'input',
        placeholder:'Enter user password',

    },
]


export const signInFormControls = [
  

   
    {
        label:'User Email',
        name:'userEmail',
        type:'text',
        componetType:'input',
        placeholder:'Enter user email',

    },
    {
        label:'Password',
        name:'password',
        type:'text',
        componetType:'input',
        placeholder:'Enter user password',

    },
]

export const initialSignInFormData = {
    userEmail:'',
    password:'',
}

export const initialSignUpFormData = {
    userName:'',
    userEmail:'',
    password:'',
}