'use client';

import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import SectionWrapper from '../ui/SectionWrapper';
import GradientText from '../ui/GradientText';
import { faqs } from '@/data/content';
import { colors, gradients } from '@/theme/colors';

const MotionBox = motion.create(Box);

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | false>('panel0');

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <SectionWrapper id="faq" background="default">
      <Box component="header" sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          component="span"
          sx={{
            color: colors.indigo.main,
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          FAQ
        </Typography>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Frequently Asked{' '}
          <GradientText variant="h2" component="span">
            Questions
          </GradientText>
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}
        >
          Got questions about NextOra campus platform? Here are the most common queries about our IIT Sri Lanka student app.
        </Typography>
      </Box>

      <Box component="section" aria-label="Frequently Asked Questions about NextOra" sx={{ maxWidth: 800, mx: 'auto' }}>
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
                background: colors.white,
                backdropFilter: 'blur(20px)',
                border: '1px solid',
                borderColor:
                  expanded === `panel${index}`
                    ? alpha(colors.primary.main, 0.25)
                    : colors.grey[200],
                borderRadius: '16px !important',
                mb: 2,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                '&::before': {
                  display: 'none',
                },
                '&:hover': {
                  borderColor: alpha(colors.primary.main, 0.25),
                  boxShadow: `0 4px 12px ${alpha(colors.primary.main, 0.08)}`,
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
                          ? gradients.blueIndigo
                          : alpha(colors.primary.main, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {expanded === `panel${index}` ? (
                      <Remove sx={{ fontSize: 18, color: 'white' }} />
                    ) : (
                      <Add sx={{ fontSize: 18, color: colors.primary.main }} />
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
                  variant="subtitle1"
                  component="h3"
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
