'use client';

import { Box, CircularProgress, Typography } from '@mui/material';
import Image from 'next/image';
import { colors } from '@/theme/colors';

export default function Loading() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: colors.background,
                gap: 3,
            }}
        >
            {/* Spinner + Logo */}
            <Box
                sx={{
                    position: 'relative',
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CircularProgress
                    size={80}
                    thickness={2}
                    sx={{ color: colors.primary.main }}
                />

                {/* Center Logo */}
                <Box
                    sx={{
                        position: 'absolute',
                        width: { xs: 50, sm: 55, md: 60 },
                        height: { xs: 25, sm: 28, md: 30 },
                    }}
                >
                    <Image
                        src="/sdgp_logo.png"
                        alt="NextOra Logo"
                        fill
                        priority
                        style={{ objectFit: 'contain' }}
                    />
                </Box>
            </Box>

            {/* Loading text */}
            <Typography
                variant="body2"
                sx={{
                    color: colors.text.secondary,
                    fontWeight: 500,
                }}
            >
                Loading NextOra...
            </Typography>
        </Box>
    );
}
