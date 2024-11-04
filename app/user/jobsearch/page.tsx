"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Briefcase, Clock } from "lucide-react";

// Mock data for job listings
const jobListings = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York, NY",
    type: "Full-time",
    experience: "Mid-level",
    description:
      "We are seeking a talented Frontend Developer to join our team...",
  },
  {
    id: 2,
    title: "UX Designer",
    company: "DesignHub",
    location: "San Francisco, CA",
    type: "Contract",
    experience: "Senior",
    description:
      "Join our creative team as a UX Designer and help shape the future of our products...",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataTech",
    location: "Remote",
    type: "Full-time",
    experience: "Entry-level",
    description:
      "Exciting opportunity for a Data Scientist to work on cutting-edge projects...",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataTech",
    location: "Remote",
    type: "Full-time",
    experience: "Entry-level",
    description:
      "Exciting opportunity for a Data Scientist to work on cutting-edge projects...",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "DataTech",
    location: "Remote",
    type: "Full-time",
    experience: "Entry-level",
    description:
      "Exciting opportunity for a Data Scientist to work on cutting-edge projects...",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "DataTech",
    location: "Remote",
    type: "Full-time",
    experience: "Entry-level",
    description:
      "Exciting opportunity for a Data Scientist to work on cutting-edge projects...",
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "DataTech",
    location: "Remote",
    type: "Full-time",
    experience: "Entry-level",
    description:
      "Exciting opportunity for a Data Scientist to work on cutting-edge projects...",
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "DataTech",
    location: "Remote",
    type: "Full-time",
    experience: "Entry-level",
    description:
      "Exciting opportunity for a Data Scientist to work on cutting-edge projects...",
  },
  {
    id: 9,
    title: "Data Scientist",
    company: "DataTech",
    location: "Remote",
    type: "Full-time",
    experience: "Entry-level",
    description:
      "Exciting opportunity for a Data Scientist to work on cutting-edge projects...",
  },
  {
    id: 9,
    title: "Data Scientist",
    company: "DataTech",
    location: "Remote",
    type: "Full-time",
    experience: "Entry-level",
    description:
      "Exciting opportunity for a Data Scientist to work on cutting-edge projects...",
  },
];

export default function JobSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("all");
  const [jobType, setJobType] = useState("all");
  const [experienceLevel, setExperienceLevel] = useState("all");
  const [resumeUploaded, setResumeUploaded] = useState(false);

  const handleResumeUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setResumeUploaded(true);
    }
  };

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (location === "all" || job.location === location) &&
      (jobType === "all" || job.type === jobType) &&
      (experienceLevel === "all" || job.experience === experienceLevel)
  );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Find Your Dream Job</h1>

      {!resumeUploaded && (
        <div className="flex items-center justify-center">
          <Button>
            <label htmlFor="resume-upload" className="cursor-pointer">
              Upload Resume to View Jobs
            </label>
          </Button>
          <Input
            type="file"
            id="resume-upload"
            accept=".pdf, .doc, .docx"
            onChange={handleResumeUpload}
            style={{ display: "none" }}
          />
        </div>
      )}

      {resumeUploaded && (
        <>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Location</SelectItem>
                <SelectItem value="New York, NY">New York, NY</SelectItem>
                <SelectItem value="San Francisco, CA">
                  San Francisco, CA
                </SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Type</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
              </SelectContent>
            </Select>
            <Select value={experienceLevel} onValueChange={setExperienceLevel}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Level</SelectItem>
                <SelectItem value="Entry-level">Entry-level</SelectItem>
                <SelectItem value="Mid-level">Mid-level</SelectItem>
                <SelectItem value="Senior">Senior</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full md:w-auto">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      <MapPin className="mr-1 h-3 w-3" />
                      {job.location}
                    </Badge>
                    <Badge variant="secondary">
                      <Briefcase className="mr-1 h-3 w-3" />
                      {job.type}
                    </Badge>
                    <Badge variant="secondary">
                      <Clock className="mr-1 h-3 w-3" />
                      {job.experience}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </div>
  );
}
