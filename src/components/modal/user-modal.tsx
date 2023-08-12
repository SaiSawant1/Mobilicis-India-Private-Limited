import { userModalStore } from '@/hooks/user-modal-store'
import React from 'react'
import Modal from '../ui/Modal'



function UserModal() {
    const {isOpen,onClose}=userModalStore()

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Create User' description='Please enter your details' >
        hi
    </Modal>
  )
}

export default UserModal