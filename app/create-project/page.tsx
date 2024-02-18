import Modal from "@/components/modal"
import ProjectForm from "@/components/ProjectForm"
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

async function CreateProject() {
   const session = await getCurrentUser();
  // if(!session?.user) redirect('/')
  return (
    <Modal>
        <h3 className="modal-head-text">
           Create a  New Project
        </h3>
        <ProjectForm type="create" session={session} />
    </Modal>
  )
}

export default CreateProject