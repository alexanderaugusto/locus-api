const { ValidationError } = require('yup')

const errorHandler = (err, req, res, next) => {
  console.error(err)

  if(err instanceof ValidationError){
    let errors = {}

    err.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return res.status(400).json({
      cod: 400,
      message: 'Dados inválidos!',
      errors
    })
  }

  return res.status(500).json({
    cod: 500,
    message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
  })
}

module.exports = errorHandler