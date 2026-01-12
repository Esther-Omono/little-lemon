import { render, screen } from '@testing-library/react';
import Reservation, {
  initializeTimes,
  timesReducer,
  validateDate,
  validateGuests,
  validateTime,
  validateOccasion,
} from '../Reservation.jsx';

// Step 1: Test for static text rendering
test('Renders the BookingForm heading', () => {
  render(<Reservation />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});

// Step 2: Test the initializeTimes function
test('initializeTimes returns a non-empty array of available times', () => {
  const initialTimes = initializeTimes();

  // Validate that initializeTimes returns a non-empty array
  expect(Array.isArray(initialTimes)).toBe(true);
  expect(initialTimes.length).toBeGreaterThan(0);
});

// Step 3: Test the timesReducer (updateTimes)
test('timesReducer returns new times when given a date', () => {
  const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const selectedDate = new Date('2024-01-15');
  const action = { type: 'UPDATE_TIMES', date: selectedDate };

  const result = timesReducer(state, action);

  // Validate that the reducer returns a non-empty array
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

// ========== HTML5 VALIDATION TESTS ==========

describe('HTML5 Validation Attributes', () => {
  test('Date input has required attribute', () => {
    render(<Reservation />);
    const dateInput = screen.getByLabelText(/date/i);

    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');
  });

  test('Date input has min attribute set to today or later', () => {
    render(<Reservation />);
    const dateInput = screen.getByLabelText(/date/i);
    const today = new Date().toISOString().split('T')[0];

    expect(dateInput).toHaveAttribute('min', today);
  });

  test('Time select has required attribute', () => {
    render(<Reservation />);
    const timeSelect = screen.getByLabelText(/time/i);

    expect(timeSelect).toHaveAttribute('required');
  });

  test('Time select is disabled when no date is selected', () => {
    render(<Reservation />);
    const timeSelect = screen.getByLabelText(/time/i);

    expect(timeSelect).toBeDisabled();
  });

  test('Number of diners select has required attribute', () => {
    render(<Reservation />);
    const guestsSelect = screen.getByLabelText(/number of diners/i);

    expect(guestsSelect).toHaveAttribute('required');
  });

  test('Occasion select has required attribute', () => {
    render(<Reservation />);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(occasionSelect).toHaveAttribute('required');
  });

  test('Submit button is disabled when form is incomplete', () => {
    render(<Reservation />);
    const submitButton = screen.getByRole('button', { name: /book now/i });

    expect(submitButton).toBeDisabled();
  });
});

// ========== JAVASCRIPT VALIDATION TESTS ==========

describe('JavaScript Validation Functions', () => {
  test('validateDate returns true for valid future dates', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);

    expect(validateDate(futureDate.toISOString().split('T')[0])).toBe(true);
  });

  test('validateDate returns false for past dates', () => {
    const pastDate = '2020-01-01';

    expect(validateDate(pastDate)).toBe(false);
  });

  test('validateDate returns false for empty string', () => {
    expect(validateDate('')).toBe(false);
  });

  test('validateGuests returns true for valid guest count (1-8)', () => {
    expect(validateGuests('4')).toBe(true);
    expect(validateGuests('1')).toBe(true);
    expect(validateGuests('8')).toBe(true);
  });

  test('validateGuests returns false for invalid guest count', () => {
    expect(validateGuests('')).toBe(false);
    expect(validateGuests('0')).toBe(false);
  });

  test('validateTime returns true for non-empty time', () => {
    expect(validateTime('18:00')).toBe(true);
  });

  test('validateTime returns false for empty time', () => {
    expect(validateTime('')).toBe(false);
  });

  test('validateOccasion returns true for non-empty occasion', () => {
    expect(validateOccasion('birthday')).toBe(true);
  });

  test('validateOccasion returns false for empty occasion', () => {
    expect(validateOccasion('')).toBe(false);
  });
});
