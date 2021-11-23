function logErrors(err, req, res, next) {
  console.log('LogError');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('Error Handler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

module.exports = { logErrors, errorHandler }
