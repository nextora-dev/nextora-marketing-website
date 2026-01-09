'use client';

import { Box, Grid, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { teamMembers } from '@/data/content';
import { colors, gradients, avatarGradients } from '@/theme/colors';

const MotionBox = motion.create(Box);

export default function Team() {

  return (
    <SectionWrapper id="team" background="mesh">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          sx={{
            color: colors.indigo.main,
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          OUR TEAM
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Built by{' '}
          <GradientText
            variant="h2"
            component="span"
            gradient={gradients.blueIndigo}
          >
            Students
          </GradientText>
          , for Students
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 700, mx: 'auto', mb: 4 }}
        >
          We&apos;re a team of IIT undergraduates from the SE-03 group who understand the challenges
          of campus life. Our mission is to make every student&apos;s journey smoother.
        </Typography>

        {/* Mission Statement */}
        <GlassCard
          hover={false}
          gradient
          sx={{
            maxWidth: 600,
            mx: 'auto',
            textAlign: 'center',
            py: 3,
            mb: 8,
          }}
        >
          <Typography
            variant="h6"
            component="blockquote"
            sx={{
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            &ldquo;To empower every IIT student with technology that simplifies campus life
            and creates lasting connections.&rdquo;
          </Typography>
            <Typography
            variant="caption"
            sx={{
              color: colors.primary.main,
              fontWeight: 600,
              display: 'block',
              mt: 2,
            }}
          >
            — Our Mission
          </Typography>
        </GlassCard>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  '&:hover': {
                    '& .team-avatar': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                  <Avatar
                      className="team-avatar"
                      src={member.avatar}
                      alt={member.name}
                      sx={{
                          width: 100,
                          height: 100,
                          mx: 'auto',
                          mb: 3,
                          background: avatarGradients[index % avatarGradients.length],
                          fontSize: '2rem',
                          fontWeight: 700,
                          transition: 'all 0.3s ease',
                      }}
                  />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {member.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: colors.primary.main,
                    fontWeight: 600,
                    display: 'block',
                    mb: 2,
                  }}
                >
                  {member.role}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {member.bio}
                </Typography>
              </GlassCard>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
