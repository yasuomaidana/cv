import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { PortFolioItem } from '../../../utils/portfolio';
import PortfolioMediaGallery from './MediaGallery/PortfolioMediaGallery';
import "./ProjectDialog.scss";

interface ProjectDialogProps{
    open:boolean;
    handle_toggle: () => void;
    item:PortFolioItem;
}

const ProjectDialog:React.FC<ProjectDialogProps> = (props) => {
    const item = props.item
  return (
    <Dialog open={props.open} onClose={props.handle_toggle} fullWidth maxWidth="lg">
        <DialogTitle>{item.title}</DialogTitle>
        {props.item.portFolioMedia && <PortfolioMediaGallery props={item.portFolioMedia}/>}
        <DialogContent>
            {item.description}
        </DialogContent>
        {<DialogActions className='project_dialog_actions'>
            {item.links?.map((link,key)=> 
            <a key={key} href={link.link} target='_blank' rel='noreferrer'
            className='project_dialog_icon'
            >{link.icon}</a>)}
        </DialogActions>}
    </Dialog>
  )
}

export default ProjectDialog