import React from 'react'
import Modal from '../ui/Modal'

interface AddExperienceModalProps {
    isOpen: boolean
    onClose: () => void
}


function AddExperienceModal({isOpen, onClose}: AddExperienceModalProps) {
  return (
    <Modal title='Add Experience' description='Please enter your details'  isOpen={isOpen} onClose={onClose}  >

    

    </Modal>
  )
}

export default AddExperienceModal