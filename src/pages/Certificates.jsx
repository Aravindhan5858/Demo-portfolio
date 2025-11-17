import React from 'react'
import CertificateCard from '../components/CertificateCard'

const certificatesData = [
  {
    id: 1,
    title: 'React Professional Certificate',
    issuer: 'Meta',
    defaultImage: 'https://picsum.photos/seed/cert1/800/600'
  },
  {
    id: 2,
    title: 'JavaScript Advanced Concepts',
    issuer: 'Udemy',
    defaultImage: 'https://picsum.photos/seed/cert2/800/600'
  },
  {
    id: 3,
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    defaultImage: 'https://picsum.photos/seed/cert3/800/600'
  },
  {
    id: 4,
    title: 'UX Design Specialization',
    issuer: 'Coursera',
    defaultImage: 'https://picsum.photos/seed/cert4/800/600'
  },
  {
    id: 5,
    title: 'TypeScript Mastery',
    issuer: 'Frontend Masters',
    defaultImage: 'https://picsum.photos/seed/cert5/800/600'
  },
  {
    id: 6,
    title: 'Web Accessibility (WCAG)',
    issuer: 'W3C',
    defaultImage: 'https://picsum.photos/seed/cert6/800/600'
  }
]

export default function Certificates(){
  return (
    <div className="certificates-container">
      <h2 className="section-title">Certificates & Achievements</h2>
      
      <div className="certificates-grid">
        {certificatesData.map(cert => (
          <CertificateCard
            key={cert.id}
            title={cert.title}
            issuer={cert.issuer}
            defaultImage={cert.defaultImage}
          />
        ))}
      </div>
    </div>
  )
}
