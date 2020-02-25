using FluentValidation.TestHelper;
using NUnit.Framework;
using SmartFleetManagement.Domain;
using SmartFleetManagement.Services.Validators;

namespace SmartFleetManagement.Tests.Validators
{
    internal class UserValidatorTests
    {
        private UserValidator _userValidator;

        [SetUp]
        public void Setup()
        {
            this._userValidator = new UserValidator();
        }

        [Test]
        public void UserValidatorShouldNotHaveAnyErrorWhenModelIsValid()
        {
            // Arrange
            var user = new User("valid_test", "valid_test@test.com", "valid_username", "some_valid_password");

            // Act
            var result = _userValidator.TestValidate(user);

            // Assert
            result.ShouldNotHaveAnyValidationErrors();
        }

        [TestCase(null, "Name can not be null")]
        [TestCase("", "Name can not be empty")]
        public void UserValidatorShouldThrowErrorWhenNameIsInvalid(string name, string expectedMessage)
        {
            // Arrange
            var user = new User(name, "test@test.com", "test_username", "some_password");

            // Act
            var result = _userValidator.TestValidate(user);

            // Assert
            result.ShouldHaveValidationErrorFor(x => x.Name).WithErrorMessage(expectedMessage);
        }

        [TestCase("test", "Email is not valid")]
        [TestCase(null, "Email can not be null")]
        [TestCase("", "Email can not be empty")]
        public void UserValidatorShouldThrowErrorWhenEmailIsInvalid(string email, string expectedMessage)
        {
            // Arrange
            var user = new User("Test", email, "test_username", "some_password");

            // Act
            var result = _userValidator.TestValidate(user);

            // Assert
            result.ShouldHaveValidationErrorFor(x => x.Email).WithErrorMessage(expectedMessage);
        }

        [TestCase(null, "Username can not be null")]
        [TestCase("", "Username can not be empty")]
        public void UserValidatorShouldThrowErrorWhenUsernameIsInvalid(string username, string expectedMessage)
        {
            // Arrange
            var user = new User("Test", "test@test.com", username, "some_password");

            // Act
            var result = _userValidator.TestValidate(user);

            // Assert
            result.ShouldHaveValidationErrorFor(x => x.Username).WithErrorMessage(expectedMessage);
        }

        [TestCase(null, "Password can not be null")]
        [TestCase("", "Password can not be empty")]
        [TestCase("test", "Minimum length for password is 8 characters")]
        public void UserValidatorShouldThrowErrorWhenPasswordIsInvalid(string password, string expectedMessage)
        {
            // Arrange
            var user = new User("test", "test@test.com", "test_username", password);

            // Act
            var result = _userValidator.TestValidate(user);

            // Assert
            result.ShouldHaveValidationErrorFor(x => x.Password).WithErrorMessage(expectedMessage);
        }
    }
}
