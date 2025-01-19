import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import axios from "axios";

const BookingPage = () => {
  const { restaurantId } = useParams();
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [bookingStatus, setBookingStatus] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!restaurantId) {
      toast.error("No restaurant selected");
      navigate("/");
    }
  }, [restaurantId, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !guests || !userName || !userEmail) {
      toast.error("Please fill in all fields");
      setBookingStatus("Booking Not Confirmed"); 
      return;
    }

   
    const bookingData = {
      restaurant_id: restaurantId,
      user_name: userName,
      user_email: userEmail,
      date: date.toISOString().split("T")[0], 
      time,
      guests: parseInt(guests, 10),
    };
    console.log("Booking data being sent:", bookingData); // This will log the data in the console

    try {
      const response = await axios.post("https://bookbackend-delta.vercel.app/bookings", bookingData);

      if (response.status === 201) { // Check if the booking was successfully created
        toast.success("Booking confirmed! We'll send you a confirmation email shortly.");
        setBookingStatus("Booking Confirmed"); // Set success status message
        navigate("/"); // Navigate to the home or another page after successful booking
      } else {
        toast.error("Failed to confirm booking. Please try again.");
        setBookingStatus("Booking Not Confirmed");
      }
    } catch (error) {
      toast.error("Failed to confirm booking. Please try again.");
      setBookingStatus("Booking Not Confirmed");
      console.error("Error booking:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-8 space-y-8 animate-fadeIn">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">Reserve Your Table</h1>
            <p className="mt-2 text-gray-600">Complete your booking details below</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Select Date
                </label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Time
                  </label>
                  <Select onValueChange={setTime}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
                        "20:00", "20:30", "21:00",
                      ].map((timeSlot) => (
                        <SelectItem key={timeSlot} value={timeSlot}>
                          {timeSlot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Number of Guests
                  </label>
                  <Select onValueChange={setGuests}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <Input
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button type="submit">
                Confirm Booking
              </Button>
            </div>
          </form>

          {/* Booking status message */}
          {bookingStatus && (
            <div className="mt-4 text-center text-xl font-semibold text-gray-900">
              {bookingStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
