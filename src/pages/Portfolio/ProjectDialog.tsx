import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { PortFolioItem } from '../../utils/portfolio';

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
        {typeof(item.thumbnail) === "string" && <img src={item.thumbnail} alt={item.title}/>}
        <DialogContent>
            {item.description}
        </DialogContent>
        {
            item.links && 
                <DialogActions>
                    {item.links.map((link,key)=> <a key={key} href={link.link} target='_blank' rel='noreferrer'>{link.icon}</a>)}
                </DialogActions>
        }
    </Dialog>
  )
}

export default ProjectDialog