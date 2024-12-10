import * as React from 'react'

interface EmailTemplateProps {
  feedback: string
  email?: string
}

export const EmailTemplate = ({ feedback, email }: EmailTemplateProps) => (
  <div
    style={{
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}
  >
    <h1 style={{ color: '#333', padding: 0, margin: 0 }}>
      Feedback from {email ? email?.split('@')[0] : 'Anonymous'}
    </h1>
    <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{feedback}</p>
    {email && (
      <p style={{ fontStyle: 'italic', color: '#555' }}>Email: {email}</p>
    )}
  </div>
)
