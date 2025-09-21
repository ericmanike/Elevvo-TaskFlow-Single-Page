import React from 'react'
import Fcards from './Fcards'
import { FaTasks }from'react-icons/fa'
import colab from './assets/collab.png'
import schedule from './assets/schedule.png'
import manage from './assets/manage.png'


function Features() {
  return (
    <div className='w-full text-white text-3xl my-10 p-5 grid grid-cols-1 lg:grid-cols-3 gap-5'>
<div>
    <Fcards  title="Task Creation & Organization" image={manage}  description ="
    Create, edit, and delete tasks easily.
Categorize tasks with projects, folders, or boards.

Add due dates, deadlines, and reminders.
Support for recurring tasks (daily, weekly, monthly)."/>

</div>
   <Fcards  title=" Prioritization and Scheduling" image={schedule}  description =" Mark tasks with priority levels (high, medium, low).

Calendar view for scheduling tasks.

Time estimates and deadlines.

Drag-and-drop task reordering."/>

<div>
 <Fcards   title="Collaboration" image={colab}description ="Assign tasks to team members.

Shared projects or boards.

Real-time updates and notifications.

Commenting and file attachments on tasks."/>

</div>

<div>

</div>

    </div>
  )
}

export default Features