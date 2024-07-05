import React from 'react'
import { Card, CardBody } from 'react-bootstrap'
import { connect } from 'react-redux'

const DisplayCount = ({todo}) => {
  return (
    <Card className='shadow-sm border border-0'>
        <CardBody>
            <h4>Number of Todos : {todo.length}</h4>
        </CardBody>
    </Card>
  )
}

const mapStateToProps=(state)=>({todo:state.todoReducer})
const mapDispatchToProps=(dispatch)=>({})

export default connect(mapStateToProps, mapDispatchToProps) (DisplayCount)