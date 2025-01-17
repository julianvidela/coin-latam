import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import BrushIcon from '@mui/icons-material/Brush';
import TerminalIcon from '@mui/icons-material/Terminal';
import RepeatIcon from '@mui/icons-material/Repeat';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot className='fondoIcono'>
                        <ZoomInIcon />
                    </TimelineDot>
                    <TimelineConnector className='lineaVioleta' />
                </TimelineSeparator>
                <TimelineContent className='space-y-2 flex flex-col items-left' sx={{ py: '12px', px: 2, color: 'white' }}>
                    <h2 className="text-[20px] font-light text-[var(--color-text-blue)]">
                        Investigación
                    </h2>
                    <span className="text-[var(--color-text-gray)]">
                        Análisis de las últimas tendencias cripto.
                    </span>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector className='lineaVioleta' />
                    <TimelineDot className='fondoIcono'>
                        <BrushIcon />
                    </TimelineDot>
                    <TimelineConnector className='lineaVioleta' />
                </TimelineSeparator>
                <TimelineContent className='space-y-2 flex flex-col items-left' sx={{ py: '12px', px: 2 }}>
                    <h2 className="text-[20px] font-light text-white">
                        Diseño
                    </h2>
                    <span className="text-[var(--color-text-gray)]">
                        Creación de una plataforma intuitiva y fácil de usar.
                    </span>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector className='lineaVioleta' />
                    <TimelineDot className='fondoIcono'>
                        <TerminalIcon />
                    </TimelineDot>
                    <TimelineConnector className='lineaVioleta' />
                </TimelineSeparator>
                <TimelineContent className='space-y-2 flex flex-col items-left' sx={{ py: '12px', px: 2 }}>
                    <h2 className="text-[20px] font-light text-[var(--color-text-blue)]">
                        Desarrollo
                    </h2>
                    <span className="text-[var(--color-text-gray)]">
                        Implementación de las mejores prácticas de seguridad.
                    </span>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector className='lineaVioleta' />
                    <TimelineDot className='fondoIcono'>
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector className='lineaVioleta' />
                </TimelineSeparator>
                <TimelineContent className='space-y-2 flex flex-col items-left' sx={{ py: '12px', px: 2 }}>
                    <h2 className="text-[20px] font-light text-white">
                        Pruebas
                    </h2>
                    <span className="text-[var(--color-text-gray)]">
                        Verificación de la funcionalidad y rendimiento de la plataforma.
                    </span>
                </TimelineContent>
            </TimelineItem >
            <TimelineItem >
                <TimelineSeparator >
                    <TimelineConnector className='lineaVioleta' />
                    <TimelineDot className='fondoIcono' >
                        <RocketLaunchIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent className='space-y-2 flex flex-col items-left' sx={{ py: '12px', px: 2 }}>
                    <h2 className="text-[20px] font-light text-[var(--color-text-blue)]">
                        Lanzamiento
                    </h2>
                    <span className="text-[var(--color-text-gray)]">
                        Puesta en marcha de la plataforma con actualizaciones regulares.
                    </span>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default CustomizedTimeline;
