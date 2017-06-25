import types from 'ast-types'

const def = types.Type.def

def('ExperimentalSpreadProperty')
  .bases('Node')
  .build('argument')
  .field('argument', def('Expression'))

types.finalize()
