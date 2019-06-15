import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'dotenv/config';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;