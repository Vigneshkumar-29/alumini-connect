import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { ProjectShowcase } from './projects/ProjectShowcase';
import { ProjectDetails } from './projects/ProjectDetails';
import { CreateProject } from './projects/CreateProject';
import { Jobs } from './jobs/Jobs';
import { Mentorship } from './mentorship/Mentorship';
import { Events } from './events/Events';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Gigs } from './gigs/Gigs';
import { GigDetail } from './gigs/GigDetail';
import { Profile } from './gigs/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectShowcase />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/projects/create" element={<CreateProject />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/mentorship" element={<Mentorship />} />
      <Route path="/events" element={<Events />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/gigs" element={<Gigs />} />
      <Route path="/gigs/:id" element={<GigDetail />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}