import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
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
        <DialogTitle component={"span"} className='project_dialog_title'><Typography variant='h3' textAlign={"center"}>{item.title}</Typography></DialogTitle>
        {props.item.portFolioMedia && <PortfolioMediaGallery props={item.portFolioMedia}/>}
        <DialogContent>
            <Typography className='project_dialog_content' variant='body1'>{item.description}</Typography>
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