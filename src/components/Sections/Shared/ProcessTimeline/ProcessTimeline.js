import { StarIcon, WorkflowIcon } from 'lucide-react';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './ProcessTimeline.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

export default function ProcessTimeline({ steps, compact = true }) {
  return (
    <section className="process-time-line pt-28 pb-28">
      <SectionTitle title="Proces realizacji" coloredText="projektów" />
      <VerticalTimeline>
        {steps?.map((step, idx) => (
          <VerticalTimelineElement
            key={step.id ?? idx}
            className="vertical-timeline-element--work"
            /* pierwszy element — zachowujemy specjalne style z oryginału */
            contentStyle={idx === 0 ? { background: '#ffbf00', color: '#000' } : undefined}
            contentArrowStyle={idx === 0 ? { borderRight: '7px solid  #ffbf00' } : undefined}
            date={step.date /* opcjonalnie, jeśli dodasz date w danych */}
            iconClassName="bg-background-primary text-dark"
            icon={step.icon ?? <WorkflowIcon />}
          >
            <h3 className="vertical-timeline-element-title">{step.title}</h3>
            {step.subtitle && <h4 className="vertical-timeline-element-subtitle">{step.subtitle}</h4>}
            {step.desc && <p>{step.desc}</p>}
            {Array.isArray(step.points) && step.points.length > 0 && (
              <ul style={{ marginTop: 8 }}>
                {step.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            )}
            {step.cta?.href && step.cta?.label && (
              <p className="mt-7">
                <CustomButton link={step.cta.href} text={step.cta.label} variant="dark" />
              </p>
            )}
          </VerticalTimelineElement>
        ))}
        {/* Element końcowy ze „StarIcon” — zostawiam jak w oryginale */}
        <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} icon={<StarIcon />} />
      </VerticalTimeline>
    </section>
  );
}
