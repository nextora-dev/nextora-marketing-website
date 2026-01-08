'use client';

import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GradientText from '../ui/GradientText';
import { faqs } from '@/data/content';

const MotionBox = motion(Box);

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | false>('panel0');

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <SectionWrapper id="faq" background="default">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          sx={{
            color: '#14B8A6',
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          FAQ
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Frequently Asked{' '}
          <GradientText variant="h2" component="span">
            Questions
          </GradientText>
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, mx: 'auto' }}
        >
          Got questions? We&apos;ve got answers. Here are the most common queries we receive.
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {faqs.map((faq, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid',
                borderColor:
                  expanded === `panel${index}`
                    ? 'rgba(124, 58, 237, 0.3)'
                    : 'rgba(148, 163, 184, 0.1)',
                borderRadius: '16px !important',
                mb: 2,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&::before': {
                  display: 'none',
                },
                '&:hover': {
                  borderColor: 'rgba(124, 58, 237, 0.3)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background:
                        expanded === `panel${index}`
                          ? 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)'
                          : 'rgba(124, 58, 237, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {expanded === `panel${index}` ? (
                      <Remove sx={{ fontSize: 18, color: 'white' }} />
                    ) : (
                      <Add sx={{ fontSize: 18, color: '#7C3AED' }} />
                    )}
                  </Box>
                }
                sx={{
                  px: 3,
                  py: 1,
                  '& .MuiAccordionSummary-content': {
                    my: 2,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: expanded === `panel${index}` ? 'text.primary' : 'text.secondary',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </MotionBox>
        ))}
      </Box>
    </SectionWrapper>
  );
}
